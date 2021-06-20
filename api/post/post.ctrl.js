import mongoose from "mongoose";
import Ajv from "ajv";
import Post from "../../models/post";
import Auth from "../../models/auth";
import sanitizeHtml from "sanitize-html";

const ajv = new Ajv();

//mongoose.set('debug', true);

export const checkObejctId = (ctx, next) => {
  const { ObjectId } = mongoose.Types;
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    return;
  }
  return next();
};

export const getPostList = async (ctx) => {
  try {
    const page = +(ctx.query.page || 1);
    const limit = +(ctx.query.limit || 10);
    if (page < 1 || limit < 1) {
      ctx.status = 400;
      return;
    }

    if (!ctx.state || !ctx.state.auth) {
      ctx.status = 401;
      return;
    }

    const criteria = { username: ctx.state.auth.username };
    const postCount = await Post.countDocuments(criteria).exec();
    if (postCount === 0) {
      ctx.body = { posts: [], lastPage: 1, totalPostCount: 0 };
      ctx.status = 200;
      return;
    }

    const posts = await Post.find(criteria)
      .limit(limit)
      .skip((page - 1) * 10)
      .exec();

    const lastPage = ((postCount + limit - 1) / limit) | 0;;
    const totalPostCount = postCount;

    const body = {
      posts: posts.map((post) => ({
        ...post,
        _doc: {
          ...post._doc,
          contents: sanitizeHtml(post._doc.contents, { allowedTags: [] }),
        },
      })),
      lastPage,
      totalPostCount,
    };
    ctx.body = body;
    ctx.status = 200;
  } catch (e) {
    console.log(e);
    ctx.throw(500, e);
  }
};

export const readPost = async (ctx) => {
  const { id } = ctx.params;
  try {
    const post = await Post.findById(id).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const writePost = async (ctx) => {
  const { title, contents, tags } = ctx.request.body;
  const { auth } = ctx.state;
  const { _id, username } = auth;
  const user_id = _id;

  const schema = {
    properties: {
      title: { type: "string" },
      contents: { type: "string" },
      tags: { type: "array" },
    },
    required: ["title", "contents"],
  };

  const validate = await ajv.compile(schema);

  if (!validate({ title, contents, tags })) {
    ctx.status = 400;
    ctx.message = "invalid body error";
    return;
  }

  const post = new Post({
    title,
    contents,
    tags,
    username,
    user_id,
  });

  try {
    const authInDB = await Auth.find({ username });

    if (authInDB.posts) {
      const res = await Auth.findOneAndUpdate(
        { username },
        {
          $set: {
            posts: [
              [...authInDB.posts].filter((p) => p._id !== post._id),
              post._id,
            ],
          },
        },
        {
          new: true,
        }
      ).exec();
    } else {
      const res = await Auth.findOneAndUpdate(
        { username },
        {
          $set: {
            posts: [post._id],
          },
        },
        {
          new: true,
        }
      ).exec();
    }

    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const deletePost = async (ctx) => {
  const { id } = ctx.params;
  try {
    const res = await Post.findByIdAndDelete(id).exec();
    ctx.status = 200;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const updatePost = async (ctx) => {
  const { id } = ctx.params;

  const { title, contents, tags } = ctx.request.body;

  const schema = {
    properties: {
      title: { type: "string" },
      contents: { type: "string" },
      tags: { type: "array" },
    },
  };
  const validate = await ajv.compile(schema);

  if (!validate({ title, contents, tags })) {
    ctx.status = 400;
    ctx.body = "invalid body error";
    return;
  }

  try {
    //new =true for data after updated, false for data before updated
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
      new: true,
    }).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PostSchema = new Schema({
    title: String,
    contents: String,
    tags: [String],

    user_id: mongoose.Types.ObjectId,
    username: String
},
    { timestamps: true });

const Post = mongoose.model('Post', PostSchema);
export default Post;
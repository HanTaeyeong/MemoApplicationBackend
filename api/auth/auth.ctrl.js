import bcrypt from "bcrypt";

import Auth from "../../models/auth";

//“object”, “array”, “number”, “integer”, “string”, “boolean”, and “null”.
// Note that “number” includes “integer”—all integers are numbers too.

const mode = process.env.MODE || "dev";

//const hash = await bcrypt.hash('this is salt of bcrypt 3295fjsdj', 7);

export const register = async (ctx) => {
  const { username, password } = ctx.request.body;

  if (!username || !password) {
    ctx.status = 440;
    // 'username or password is missing';
    return;
  }

  try {
    const exists = await Auth.find({ username });

    if (exists === [] || exists.length) {
      ctx.status = 409;
      ctx.message = "Already existing id";
      return;
    }

    const auth = new Auth({
      username,
      posts: [],
    });

    await auth.setPassword(password);
    await auth.save();
    ctx.body = await auth.getSerialized();

    const token = await auth.generateToken();
    ctx.set("Authorization", "Bearer " + token);

    ctx.status = 200;
    return;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const login = async (ctx) => {
  const { username, password } = ctx.request.body;

  if (!username || !password) {
    ctx.status = 440;
    // 'username or password is missing';
    return;
  }

  try {
    const authData = await Auth.find({ username });

    if (authData.length === 0) {
      // 'There is no such user'
      ctx.status = 441;
      return;
    }

    const auth = new Auth({
      ...authData,
      username,
      hashedPassword: authData[0].hashedPassword,
    });

    const valid = await auth.checkPassword(password);
    if (!valid) {
      ctx.status = 442;
      // 'invalid password'
      return;
    }
    ctx.body = auth.getSerialized();

    const token = await auth.generateToken();
    ctx.set("Authorization", "Bearer " + token);
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const check = async (ctx) => {
  
  if(!ctx.body){
    ctx.status=401;
    return ;
  }
  const user = ctx.body.user;

  if (!user) {
    ctx.status = 401;
    return;
  }
  ctx.body = { ...ctx.body, user };
  ctx.status = 200;

  return;
};

export const logout = async (ctx) => {
  await ctx.set("Authorization", "");
  ctx.status = 204;
  return;
};

const getAuthMailText = (name, url) => {
  const text = `<h1>Email Confirmation</h1>
  <h2>Hello ${name}</h2>
  <p>Thank you for confirming email</p>
  <a href=${url} >Click here to authenticate email.</a>`;

  return text;
};
// `<h1>Email Confirmation</h1>
// <h2>Hello ${name}</h2>
// <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
// <a href=http://localhost:8081/confirm/${confirmationCode}> Click here</a>
// </div>`,

export const sendAuthEmail = async () => {
  try {
    const nodemailer = require("nodemailer");

    let transporter = await nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "simplememo.net@gmail.com",
        pass: "shinY;2787;",
      },
    });
    const confirmationCode = "abcd";

    const [name, url] = [
      "Taeyeong",
      "http://localhost:5000/api/auth/verifyEmail/abcd",
    ];

    const text = getAuthMailText(name, url);

    let mailOptions = {
      from: "simplememo.net@gmail.com",
      to: "gksxodud2721@gmail.com",
      subject: "Authentication testing",
      html: text,
    };

    return transporter.sendMail(mailOptions);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("sent verification email");
  }
};

export const verifyEmail = async (ctx) => {
  const { confirmationCode } = ctx.params;
  //change state of auth to verified.

  console.log("successfully verified");
};

// const sendMail = async (file) => {
//     try {
//         const nodemailer = require("nodemailer");

//         let transporter = await nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: 'dev@cloud-stones.com',
//                 pass: 'lxdjauodrgkiamie'
//             }
//         });

//         let mailOptions = {
//             from: 'dev@cloud-stones.com',
//             to: 'gksxodud2721@naver.com',
//             subject: 'testing',
//             text: 'it works',
//             attachments: [{
//                 filename: 'myfile.xlsx',
//                 content: file
//             }]
//         }

//         return transporter.sendMail(mailOptions);
//     } catch (e) {
//         console.log(e);
//     }

// }

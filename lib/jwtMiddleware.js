import jwt from "jsonwebtoken";

const mode = process.env.MODE || "dev";

const jwtMiddleware = async (ctx, next) => {
  try {
    const [type, token] = ctx.get("Authorization").split(" ");

    if (!token) return next();

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    ctx.state.auth = {
      _id: decoded._id,
      username: decoded.username,
    };

    if (decoded.exp - Date.now() / 1000 < 60 * 60 * 24 * 5) {
      const auth = await Auth.find({ _id: decoded._id });
      const token = auth.generateToken();
      ctx.set("Authorization", "Bearer " + token);
    }

    return next();
  } catch (e) {
    return next();
  }
};

export default jwtMiddleware;

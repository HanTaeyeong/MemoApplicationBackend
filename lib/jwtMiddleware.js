import jwt from "jsonwebtoken";

const mode = process.env.MODE || "dev";

const jwtMiddleware = async (ctx, next) => {
    try {
        if (!ctx.get('Authorization')) {
            return next();
        }
        const [type, token] = ctx.get("Authorization").split(" ");
        
        if (!token) return next();

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const auth = {
            _id: decoded._id,
            username: decoded.username,
        };
        const authString = JSON.stringify(auth);

        ctx.body = { ...ctx.body, user: JSON.parse(authString) };
        
        return next();
    } catch (e) {
        return next();
    }
};

export default jwtMiddleware;

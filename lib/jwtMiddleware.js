import jwt from 'jsonwebtoken';

const jwtMiddleware = async (ctx, next) => {
    const token = ctx.cookies.get('access-token');
    if (!token) return next();
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        ctx.state.auth = {
            _id: decoded._id,
            username: decoded.username
        }

        if (decoded.exp - (Date.now() / 1000) < 60 * 60 * 24 * 5) {
            const auth = await Auth.find({ _id: decoded._id });
            const token = auth.generateToken();
            ctx.cookies.set('access-token', token, {
                maxAge: 1000 * 60 * 60 * 24 * 7,
                httpOnly: true
            })
        }

        return next();
    } catch (e) {
        return next();
    }
}

export default jwtMiddleware;
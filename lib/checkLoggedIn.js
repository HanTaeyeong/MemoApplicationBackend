const checkLoggedIn = (ctx, next) => {
    if (!ctx.body?.user) {
        ctx.status = 401;
        return;
    }
    return next();
}

export default checkLoggedIn;
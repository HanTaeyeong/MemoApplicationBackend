import Ajv from 'ajv';
import Auth from '../../models/auth';

const ajv = new Ajv({ allErrors: true });

//“object”, “array”, “number”, “integer”, “string”, “boolean”, and “null”.
// Note that “number” includes “integer”—all integers are numbers too.

const userSchema = {
    "properties": {
        "username": {
            "type": 'string',
            "pattern": '^[a-zA-Z0-9]{4,16}$'
        },
        //Minimum eight characters, at least one letter, one number and one special character:
        "password": {
            "type": 'string',
            "pattern": '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,32}$'
        }
    },
    "required": ['username', 'password']
}

export const register = async ctx => {
    const validate = ajv.compile(userSchema);
    const valid = validate(ctx.request.body);

    if (!valid) {
        ctx.status = 400;
        ctx.message = JSON.stringify(validate.errors);
        return;
    }

    const { username, password } = ctx.request.body;
    try {
        const exists = await Auth.find({ username });

        if (exists === [] || exists.length) {
            ctx.status = 409;
            return;
        }

        const auth = new Auth({
            username,posts:[]
        })

        await auth.setPassword(password);
        await auth.save();
        ctx.body = auth.getSerialized();

        const token = auth.generateToken();
        ctx.cookies.set('access-token', token, {
            maxAge: 1000 * 60 * 60 * 24 * 1,
            httpOnly: true
        });


        ctx.status = 200;
        return;

    } catch (e) {
        ctx.throw(500, e);
    }
}

export const login = async ctx => {
    const { username, password } = ctx.request.body;

    if (!username || !password) {
        ctx.status = 401;
        return;
    }

    const validate = ajv.compile(userSchema);
    const valid = validate(ctx.request.body);

    if (!valid) {
        ctx.status = 400;
        ctx.message = JSON.stringify(validate.errors);
        return;
    }

    try {
        const authData = await Auth.find({ username });
        if (!authData) {
            ctx.status = 401;
            return;
        }

        const auth = new Auth({ ...authData, username, hashedPassword: authData[0].hashedPassword });

        const valid = await auth.checkPassword(password);
        if (!valid) {
            ctx.status = 401;
            return;
        }
        ctx.body = auth.getSerialized();

        const token = auth.generateToken();
        ctx.cookies.set('access-token', token, {
            maxAge: 1000 * 60 * 60 * 24 * 1,
            httpOnly: true,
        })

    } catch (e) {
        ctx.throw(500, e);
    }
}

export const check = async ctx => {
    const { auth } = ctx.state;
    if (!auth) {
        ctx.status = 401;
        return;
    }
    ctx.body = auth;
    ctx.status = 200;

    return
}

export const logout = async ctx => {
    await ctx.cookies.set('access-token','');
    ctx.status = 204;
    return;
}



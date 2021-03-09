require('dotenv').config();

import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
// import cors from '@koa/cors'; removed when deployment state 
import mongoose from 'mongoose';

import serve from 'koa-static'
import path from 'path';
import send from 'koa-send';

import api from './api'

import jwtMiddleware from './lib/jwtMiddleware';

const app = new Koa();
const router = new Router();

// app.use(cors());
app.use(bodyParser());
app.use(jwtMiddleware);


router.use('/api', api.routes())

app.use(router.routes()).use(router.allowedMethods())

const buildDirectory = path.resolve(__dirname, './client/build');
app.use(serve(buildDirectory));
app.use(async ctx => {
    if (ctx.status === 404 && ctx.path.indexOf('/api') !== 0) {
        await send(ctx, 'index.html', { root: buildDirectory })
    }
})

const port = process.env.PORT || 80;

const uri = process.env.MONGODB_URI;
mongoose.connect(uri).then(() => {
    app.listen(port, () => {
        console.log('server is running at port '+port)
    });
    app.listen(443, () => {
        console.log('server is running at port '+443)
    })
}).catch(e => console.log(e));


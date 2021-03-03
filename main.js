require('dotenv').config();

import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import cors from 'cors';
import mongoose from 'mongoose';

import api from './api'
import postApi from './api/post';

import jwtMiddleware from './lib/jwtMiddleware';

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(jwtMiddleware);

// router.use('/api/post', postApi.routes());

router.get('/', ctx => {
    ctx.body = "Home";
})

router.get('/about/:name?', ctx => {
    const { name } = ctx.params;
    ctx.status = 200;
    ctx.body = `WELLCOME ${name}`;
})

router.use('/api', api.routes())

app.use(router.routes()).use(router.allowedMethods())

const port = process.env.PORT || 4000;

const uri = process.env.MONGODB_URI;
mongoose.connect(uri).then(() => {
    app.listen(port, () => {
        console.log('server is running')
    })
  
}).catch(e => console.log(e));


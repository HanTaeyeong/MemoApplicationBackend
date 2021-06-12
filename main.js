require('dotenv').config();

import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';


import api from './api'

import jwtMiddleware from './lib/jwtMiddleware';
import { nextTick } from 'process';

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(jwtMiddleware);


router.use('/api', api.routes())

app.use(router.routes()).use(router.allowedMethods())


const port = process.env.PORT || 80;

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    app.listen(port, () => {
        console.log('server is running at port ' + port)
    });
}).catch(e => console.log(e));


require('dotenv').config();
import Koa from 'koa';
import cors from '@koa/cors';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';

import api from './api'

import jwtMiddleware from './lib/jwtMiddleware';

const app = new Koa();
const router = new Router();

app.use(jwtMiddleware);
app.use(cors({ origin: '*', credentials: true }));
app.use(bodyParser());


router.use('/api', api.routes())

app.use(router.routes()).use(router.allowedMethods())

const port = process.env.PORT || 8080;

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => {
    app.listen(port, () => {
        console.log('server is running at port ' + port)
    });
}).catch(e => console.log(e));


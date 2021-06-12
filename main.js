
require('dotenv').config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
// import cors from '@koa/cors'; removed when deployment state 
import mongoose from 'mongoose';

import https from 'https';
import path from 'path';
import fs from 'fs';

import api from './api'

import jwtMiddleware from './lib/jwtMiddleware';


const app = new Koa();
const router = new Router();


app.use(bodyParser());
app.use(jwtMiddleware);

router.use('/api', api.routes())

app.use(router.routes()).use(router.allowedMethods())

const port = process.env.PORT || 5347;

const uri = process.env.MONGODB_URI;
const key = fs.readFileSync(path.join(__dirname, 'cert', 'key.pem'))
const cert = fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))
const sslServer = https.createServer({
    key,
    cert
}, app.listen)

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    sslServer.listen(port, () => {
        console.log('sslServer is running at port ' + port)
    });
}).catch(e => console.log(e));


import Router from 'koa-router';
import post from './post';
import auth from './auth';
import health from './health';

const api = new Router();

api.use('/post', post.routes());
api.use('/auth', auth.routes());
api.use('/health', health.routes());

export default api;

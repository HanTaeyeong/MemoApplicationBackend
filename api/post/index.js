
import Router from 'koa-router';

import * as postCtrl from './post.ctrl.js';

const post = new Router();

post.get('/get', postCtrl.getPostList);
post.post('/write', postCtrl.writePost);

post.get('/read/:id', postCtrl.checkObejctId, postCtrl.readPost);
post.post('/delete/:id', postCtrl.checkObejctId, postCtrl.deletePost);
post.post('/update/:id', postCtrl.checkObejctId, postCtrl.updatePost);

export default post;

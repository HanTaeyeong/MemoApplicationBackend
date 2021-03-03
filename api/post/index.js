
import Router from 'koa-router';

import * as postCtrl from './post.ctrl.js';

const post = new Router();

post.get('/get', postCtrl.getPostList);
post.post('/write', postCtrl.writePost);

post.get('/read/:id', postCtrl.checkObejctId, postCtrl.readPost);
post.delete('/delete/:id', postCtrl.checkObejctId, postCtrl.deletePost);
post.patch('/update/:id', postCtrl.checkObejctId, postCtrl.updatePost);

export default post;

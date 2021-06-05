import Router from 'koa-router';

const health = new Router();

const healthCheck=async()=>{
    try{
        ctx.status=200;
    }catch(e){
        console.log(e);
        ctx.status=500;
    }
}

health.get('/healthy', healthCheck);

export const health;
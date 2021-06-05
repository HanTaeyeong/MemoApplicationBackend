import Router from 'koa-router';

const health = new Router();

const healthCheck=async(ctx)=>{
    try{
        ctx.status=200;
    }catch(e){
        console.log(e);
        ctx.status=500;
    }
}

health.get('/healthy', healthCheck);

export default health;
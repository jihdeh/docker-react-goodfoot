import koa from "koa";
import koaRouter from "koa-router";
import bodyParser from "koa-bodyparser";

const api = koa();
const router = koaRouter();

api.use(bodyParser());

router.get("/:verify-signature", function*() {
	this.body = "hello";
});

api
  .use(router.routes())
  .use(router.allowedMethods());

export default api;

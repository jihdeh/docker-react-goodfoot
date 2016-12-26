import koa from "koa";
import koaRouter from "koa-router";
import bodyParser from "koa-bodyparser";

const api = koa();
const router = koaRouter();

api.use(bodyParser());

router.post("/verify-signature", function*() {
	const {key} = this.request.body;
	if(!key || !this.request.headers["x-key-hash"]) {
		this.status = 400;
		this.body = "Not Authorized";
		return;
	}
	this.status = 200;
	this.body = "Success";
});

api
  .use(router.routes())
  .use(router.allowedMethods());

export default api;

import koa from "koa";
import koaRouter from "koa-router";
import bodyParser from "koa-bodyparser";

const api = koa();
const router = koaRouter();

api.use(bodyParser());

router.post("/verify-signature", function*() {
	const {hash, key} = this.request.body;
	if(!hash && !key) {
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

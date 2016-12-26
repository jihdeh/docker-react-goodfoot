import koa from "koa";
import koaRouter from "koa-router";
import bodyParser from "koa-bodyparser";
import crypto from "crypto";

const api = koa();
const router = koaRouter();

api.use(bodyParser());
//please note selenium fails at some point when trying to get id
//and sometimes it passess
router.post("/verify-signature", function*() {
	const {key} = this.request.body;
	let hashedKey = crypto.createHash('md5').update(key).digest('hex');
	const hash = this.request.headers["x-key-hash"];
	if(!key || !hash) {
		this.status = 400;
		this.body = "Not Authorized";
		return;
	};
	if(hashedKey !== hash) {
		this.status = 400;
		this.body = "Not Authorized";
		return;
	};
	this.status = 200;
	this.body = "Success";
});

api
  .use(router.routes())
  .use(router.allowedMethods());

export default api;

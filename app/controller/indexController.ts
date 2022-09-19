import { Context } from "koa";

class IndexController {
	async index(ctx: Context) {
		ctx.body = 'hello koa';
	}
}

export default new IndexController();

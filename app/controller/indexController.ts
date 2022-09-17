import { Context } from "koa";
import UserService from '../service/UserService'

class IndexController {
	async index(ctx: Context) {
		const res = await UserService.buildUser()
		ctx.body = res
	}
}

export default new IndexController();

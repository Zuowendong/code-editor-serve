import { Context } from "koa";
import usersService from "../service/usersService";

class IndexController {
	async index(ctx: Context) {
		const res = await usersService.createUser({ userName: "Jane", password: "11111111111" });
		ctx.body = JSON.stringify(res, null, 4);
	}
}

export default new IndexController();

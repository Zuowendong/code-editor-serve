import { Context } from "koa";
import sceneService from "../service/sceneService";

class SceneController {
	async create(ctx: Context) {
		console.log(3333, ctx.request)
		const res = await sceneService.createScene({
			name: '测试1',
			width: 1920,
			height: 1080,
			detail: ''
		});
		ctx.body = JSON.stringify(res, null, 4);
		console.log(4444444, ctx)
	}

	async list(ctx: Context) {
		const res = await sceneService.getScenes();
		ctx.body = JSON.stringify(res, null, 4);
	}
}

export default new SceneController();

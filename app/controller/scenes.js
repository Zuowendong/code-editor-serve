const Controller = require("egg").Controller;
const BaseController = require("./base");

class ScenesController extends BaseController {
	constructor(...args) {
		super(...args);
		this.entry = "scenes";
	}

	// 新建
	async createScene() {
		const { app, service, ctx } = this;
		const body = ctx.request.body;
		let result = await service.scenes.createScene(body);
		result ? this.success("新建成功") : this.error("新建失败");
	}
	// 列表
	// 更新
	// 删除
}

module.exports = ScenesController;
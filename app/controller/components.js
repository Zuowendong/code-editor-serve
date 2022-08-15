const Controller = require("egg").Controller;
const BaseController = require("./base");

class ComponentsController extends BaseController {
    constructor(...args) {
        super(...args);
        this.entity = "components";
    }

    // 获取画布中所有组件数据
    async getCanvasComps() {
        const { app, service, ctx } = this;
        let result = await service.components.getCanvasComps();
        this.success(result);
    }

    // 设置画布中组件数据
    async setCanvasComps() {
        const { app, service, ctx } = this;
        const body = ctx.request.body;
        let result = await service.components.setCanvasComps(body);
        result
            ? this.success("保存成功")
            : this.error("保存失败");
    }

    async getCodeTemp() {
        const { app, service, ctx } = this;
        let result = await service.components.getCodeTemp();
        this.success(result);
    }
}

module.exports = ComponentsController;

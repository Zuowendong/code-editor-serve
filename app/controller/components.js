const Controller = require("egg").Controller;
const BaseController = require("./base");

class ComponentsController extends BaseController {
    constructor(...args) {
        super(...args);
        this.entity = "components";
    }

    // 获取画布中所有组件数据
    async getCanvseComps() {
        const { app, service, ctx } = this;
        let result = await service.components.getCanvseComps();
        this.success(result);
    }
}

module.exports = ComponentsController;

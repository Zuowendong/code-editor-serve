const { Service } = require("egg");
const BaseService = require("./base");

class ComponentsService extends BaseService {
    constructor(...args) {
        super(...args);
        this.entity = "components"; // 数据库表名
    }

    // 获取画布中所有组件数据
    async getCanvseComps() {
        const { app, service, ctx } = this;
        let result = await app.mysql.select("components");
        return result;
    }
}

module.exports = ComponentsService;

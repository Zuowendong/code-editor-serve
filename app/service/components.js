const { Service } = require("egg");
const BaseService = require("./base");

class ComponentsService extends BaseService {
    constructor(...args) {
        super(...args);
        this.entity = "components"; // 数据库表名
    }
}

module.exports = ComponentsService;

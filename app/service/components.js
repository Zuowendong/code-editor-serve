const { Service } = require("egg");
const BaseService = require("./base");
const templateHandle = require("../utils/templateHandle.js");

class ComponentsService extends BaseService {
    constructor(...args) {
        super(...args);
        this.entity = "components"; // 数据库表名
    }

    // 获取画布中所有组件数据
    async getCanvasComps() {
        const { app, service, ctx } = this;
        let result = await app.mysql.select("components");
        return result;
    }

    // 设置画布组件数据
    async setCanvasComps(body) {
        const { app, service, ctx } = this;
        const { data } = body;

        const conn = await app.mysql.beginTransaction();
        let success = true;
        try {
            await conn.query(`DELETE FROM components`);
            await conn.query(`ALTER TABLE components auto_increment=0`);
            await conn.insert("components", {
                data,
            });
            await conn.commit();
        } catch (error) {
            success = false;
            await conn.rollback();
        }
        return success;
    }
}

module.exports = ComponentsService;

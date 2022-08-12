const { Service } = require("egg");

class BaseService extends Service {
    async select(pageNum, pageSize, where) {
        // 参考文档：https://www.eggjs.org/zh-CN/tutorials/mysql#egg-mysql
        let list = await this.app.mysql.select(this.entity, {
            where,
            orders: [["id", "asc"]], // 排序方式 desc倒序， asc正序
            offset: (pageNum - 1) * pageSize,
            limit: pageSize,
        });
        let total = await this.app.mysql.count(this.entity, where);
        return { list, total };
    }
    async create(entity) {
        // await this.app.mysql.query('select * from user)
        return await this.app.mysql.insert(this.entity, entity);
    }
    async update(entity) {
        // update user set username=? where id=?
        return await this.app.mysql.update(this.entity, entity);
    }
    async destroy(id) {
        // delete from user where id=?
        return await this.app.mysql.delete(this.entity, { id });
    }
}

module.exports = BaseService;

const Controller = require("egg").Controller;

class BaseController extends Controller {
    success(data) {
        this.ctx.body = { code: 0, data };
    }
    error(error) {
        this.ctx.body = { code: 1, error };
    }

    // 文档参考：https://www.eggjs.org/zh-CN/basics/router
    async index() {
        const { ctx, service } = this;
        // 查询，分页
        let { pageNum, pageSize, ...where } = ctx.query;
        let currPageNum = isNaN(pageNum) ? 1 : parseInt(pageNum);
        let currPageSize = isNaN(pageSize) ? 10 : parseInt(pageSize);

        let result = await service[this.entity].select(
            currPageNum,
            currPageSize,
            where
        );
        this.success(result);
    }
    async create() {
        const { ctx, app, service } = this;
        let reqBody = ctx.request.body; // 请求体
        let result = await service[this.entity].create(reqBody);
        
        result.affectedRows > 0
            ? this.success("创建成功")
            : this.error("创建失败"); // affectedRows影响到行数
    }
    async update() {
        const { ctx, app, service } = this;
        let reqBody = ctx.request.body; // 请求体
        const id = ctx.params.id;
        reqBody.id = id;
        let result = await service[this.entity].update(reqBody);
        result.affectedRows > 0
            ? this.success("更新成功")
            : this.error("更新失败");
    }
    async destroy() {
        const { ctx, app, service } = this;
        let id = ctx.params.id;
        let result = await service[this.entity].destroy(id);
        result.affectedRows > 0
            ? this.success("删除成功")
            : this.error("删除失败");
    }
}

module.exports = BaseController;

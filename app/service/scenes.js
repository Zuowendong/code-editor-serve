const { Service } = require("egg");
const BaseService = require("./base");

class ScenesService extends BaseService {
	constructor(...args) {
		super(...args);
		this.entity = "scenes";
	}

	async createScene(body) {
		const { app, service, ctx } = this;
		const { data } = body;

		const conn = await app.mysql.beginTransaction();
		let success = true;
		try {
			await conn.insert("scenes", {
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

module.exports = ScenesService;
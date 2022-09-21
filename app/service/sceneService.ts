import { scene } from "./../model/scene";

class SceneService {
	async createScene(param: any) {
		const jane = await scene.create(param);
		console.log(22222222, JSON.stringify(jane, null, 4));
	}

	async getScenes() {
		const res = await scene.findAll({
		where: {},
		raw: true	
		});
		console.log(JSON.stringify(res, null, 4));
		return res
	}
}

export default new SceneService();

import User from "../model/User";

class UserService {
	async buildUser() {
		await User.sync({ force: true });

		const jane = User.create({ name: "Jane" });
		console.log(JSON.stringify(jane, null, 4));
	}
}

export default new UserService();

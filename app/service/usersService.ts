import { users } from "../db/model/users";

class UsersService {
	async createUser(param: any) {
		const jane = await users.create(param);
		console.log(JSON.stringify(jane, null, 4)); // This is also good!
	}
}

export default new UsersService()
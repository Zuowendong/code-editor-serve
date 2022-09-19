import { Sequelize, Model, DataTypes } from "sequelize";
import config from "../config";

export const sequelize = new Sequelize(
	config.db.db_name as string,
	config.db.db_user as string,
	config.db.db_password as string,
	{
		host: config.db.db_host,
		port: Number(config.db.db_port as string),
		dialect: "mysql",
	}
);

const db = async () => {
	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully------");
		// await sequelize.sync({ force: true });
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};

export default db;

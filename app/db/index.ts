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

const User = sequelize.define(
	"User",
	{
		uuid: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUIDV1
		},
		// Model attributes are defined here
		firstName: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		lastName: {
			type: DataTypes.STRING,
			// allowNull defaults to true
		},
	},
	{
		// Other model options go here
		freezeTableName: true,
		timestamps: true,
		createdAt: "createTimestamp",
		updatedAt: "updateTimestamp",
	}
);

// `sequelize.define` also returns the model
console.log(11111111111, User === sequelize.models.User); // true


const createUser = async () => {
	const jane = await User.create({ firstName: "Jane", lastName: '11111111111' });
	console.log(JSON.stringify(jane, null, 4)); // This is also good!
};

const db = async () => {
	try {
		await sequelize.authenticate();
		console.log("------Connection has been established successfully------");
		// await sequelize.sync({ force: true });
		await createUser()
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};

export default db;

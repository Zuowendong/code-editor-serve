import { DataTypes } from "sequelize";
import { sequelize } from "..";

export const users = sequelize.define(
	"users",
	{
		uuid: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
		},
		userName: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		password: {
			type: DataTypes.STRING,
		},
	},
	{
		freezeTableName: true,
		timestamps: true,
		createdAt: "createTimestamp",
		updatedAt: "updateTimestamp",
	}
);

console.log(11111111111, users === sequelize.models.users); // true

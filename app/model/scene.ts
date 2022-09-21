import { DataTypes } from "sequelize";
import { sequelize } from "../db";

export const scene = sequelize.define(
	"scene",
	{
		uuid: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 },
		name: { type: DataTypes.STRING },
		width: { type: DataTypes.INTEGER },
		height: { type: DataTypes.INTEGER },
		detail: { type: DataTypes.TEXT, allowNull: true },
	},
	{
		tableName: "scenes",
		timestamps: true,
		createdAt: "createTimestamp",
		updatedAt: "updateTimestamp",
	}
);

console.log(11111111111, scene === sequelize.models.scene); // true

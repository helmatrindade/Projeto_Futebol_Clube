import { CreationOptional, DataTypes, Model } from 'sequelize';
import db from '.';

export default class TeamsModel extends Model {
  declare id: CreationOptional<number>;
  declare name: string;
}

TeamsModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    teamName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    underscored: true,
    sequelize: db,
    tableName: 'teams',
    timestamps: false,
  },
);

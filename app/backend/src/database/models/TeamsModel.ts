import { CreationOptional, DataTypes, Model } from 'sequelize';
import db from '.';

export default class TeamsModel extends Model {
  declare id: CreationOptional<number>;
  declare teamName: string;
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
      field: 'team_name',
    },
  },
  {
    underscored: true,
    sequelize: db,
    tableName: 'teams',
    timestamps: false,
  },
);

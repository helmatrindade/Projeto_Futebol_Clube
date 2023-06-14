import { Model, DataTypes } from 'sequelize';
import db from '.';

class SequelizeTeams extends Model {
  declare id: number;
  declare teamName: string;
}

SequelizeTeams.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    teamName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'teams',
    timestamps: true,
  },
);

export default SequelizeTeams;

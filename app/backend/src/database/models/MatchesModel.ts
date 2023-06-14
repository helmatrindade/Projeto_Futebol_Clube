import { Model, DataTypes } from "sequelize";
import db from '.';

class MatchModel extends Model {
  declare id: number;
  declare home_team_id: number;
  declare home_team_goals: number;
  declare away_team_id: number;
  declare away_team_goals: number;
  declare in_progress: boolean;
}

MatchModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  home_team_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  home_team_goals: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  away_team_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  away_team_goals: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  in_progress: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
},
  {
    sequelize: db,
    tableName: 'matches',
  }
);

export default MatchModel;

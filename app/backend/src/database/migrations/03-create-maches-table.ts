import { QueryInterface, DataTypes, Model } from "sequelize";
import { IMatch } from "../../Interfaces/IMaches";

export default  {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IMatch>>('matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      home_team_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      home_team_goals: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      away_team_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      away_team_goals: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      in_progress: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('matches');
  },
}
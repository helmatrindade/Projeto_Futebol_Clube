import { leaderboard } from '../../Interfaces/ILeaderBoard';
import TeamsModel from '../models/TeamsModel';

export default class LeaderboardService {
  public static async getHomeLeaderboard(): Promise<leaderboard[]> {
    const teams = await TeamsModel.findAll();
    // è feito o map sobre o array de times, e é retornado um array de objeto com os dados de cada time.
    return teams.map((team) => ({
      name: team.teamName,
      totalPoints: 0,
      totalGames: 0,
      totalVictories: 0,
      totalDraws: 0,
      totalLosses: 0,
      goalsFavor: 0,
      goalsOwn: 0,
    }));
  }
}

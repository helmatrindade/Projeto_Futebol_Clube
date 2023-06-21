import { Leaderboard } from '../../Interfaces/ILeaderBoard';
import MatchModel from '../models/MatchModel';
import TeamsModel from '../models/TeamsModel';
import { IMatch } from '../../Interfaces/IMaches';
import { ITeam } from '../../Interfaces/ITeam';

export default class LeaderboardService {
  // constructor(private teamsModel = new TeamsModel()) {
  //   this.teamsModel = teamsModel;
  // }

  public async getHomeLeaderboard(): Promise<Leaderboard[]> {
    const teams = await TeamsModel.findAll();
    const Matches = await MatchModel.findAll({ where: { inProgress: false } });
    return this.sortLeaderboardData(teams.map((team: ITeam) => {
      const [totalPoints, totalGames, totalVictories, totalDraws, totalLosses, goalsFavor,
        goalsOwn, goalsBalance, efficiency] = this.calculateLeaderboardData(team, Matches);
      return {
        name: team.teamName,
        totalPoints,
        totalGames,
        totalVictories,
        totalDraws,
        totalLosses,
        goalsFavor,
        goalsOwn,
        goalsBalance,
        efficiency,
      };
    }));
  }

  calculateLeaderboardData = (teams: ITeam, matches: IMatch[]) => {
    const team = matches.filter((match: IMatch) => match.homeTeamId === teams.id);
    // console.log('team', team);
    const totalVictories = team.filter((match: IMatch) => match.homeTeamGoals
    > match.awayTeamGoals).length;
    const totalGames = team.length;
    const totalDraws = team.filter((match: IMatch) => match.homeTeamGoals
    === match.awayTeamGoals).length;
    const totalLosses = team.filter((match: IMatch) => match.homeTeamGoals
    < match.awayTeamGoals).length;
    const goalsFavor = team.reduce((acc: number, match: IMatch) => acc + match.homeTeamGoals, 0);
    const goalsOwn = team.reduce((acc: number, match: IMatch) => acc + match.awayTeamGoals, 0);
    const goalsBalance = goalsFavor - goalsOwn;
    const totalPoints = totalVictories * 3 + totalDraws;
    const efficiency = Number(((totalPoints / (totalGames * 3)) * 100).toFixed(2));
    // console.log(totalPoints, totalGames, totalVictories, totalDraws, totalLosses);
    return [totalPoints, totalGames, totalVictories, totalDraws, totalLosses,
      goalsFavor, goalsOwn, goalsBalance, efficiency];
  };

  sortLeaderboardData = (leaderboard: Leaderboard[]) => leaderboard
    .sort((a: Leaderboard, b: Leaderboard) => {
      if (b.totalPoints !== a.totalPoints) return b.totalPoints - a.totalPoints;
      if (a.totalVictories !== b.totalVictories) return b.totalVictories - a.totalVictories;
      if (a.goalsBalance !== b.goalsBalance) return b.goalsBalance - a.goalsBalance;
      if (a.goalsFavor !== b.goalsFavor) return b.goalsFavor - a.goalsFavor;
      return a.goalsOwn - b.goalsOwn;
    });
}

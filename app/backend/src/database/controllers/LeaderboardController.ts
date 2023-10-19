import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';

export default class LeaderboardController {
  constructor(private leaderboardService = new LeaderboardService()) {
    this.leaderboardService = leaderboardService;
  }

  getHomeLeaderboard = async (_req: Request, res: Response) => {
    const { inProgress } = _req.query;
    if (inProgress === 'true') {
      return res.status(400).json({ message: 'Invalid query param' });
    }

    const leaderboardData = await this.leaderboardService.getHomeLeaderboard();

    if (leaderboardData !== null) {
      return res.status(200).json(leaderboardData);
    }
    return res.status(500).json({ message: 'Internal server error' });
  };
}

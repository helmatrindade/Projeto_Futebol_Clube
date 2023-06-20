import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';

export default class LeaderboardController {
  public static async getHomeLeaderboard(_req: Request, res: Response): Promise<Response> {
    const { inProgress } = _req.query;
    if (inProgress === 'true') {
      return res.status(400).json({ message: 'Invalid query param' });
    }
    const leaderboardData = await LeaderboardService.getHomeLeaderboard();

    if (leaderboardData !== null) {
      return res.status(200).json(leaderboardData);
    }
    return res.status(500).json({ message: 'Internal server error' });
  }
}

import { Router } from 'express';
import LeaderboardController from '../controllers/LeaderboardController';

const router = Router();

router.get('/', LeaderboardController.getHomeLeaderboard);

export default router;

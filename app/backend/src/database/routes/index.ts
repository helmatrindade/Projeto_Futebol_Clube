import { Router } from 'express';
import teamsRouter from './teamsRouter';
import userRouter from './userRouter';
import matchesRouter from './matchesRouter';
import leaderboardRouter from './leaderboardRouter';

const router = Router();

router.use('/teams', teamsRouter);
router.use('/login', userRouter);
router.use('/matches', matchesRouter);
router.use('/leaderboard/home', leaderboardRouter);

export default router;

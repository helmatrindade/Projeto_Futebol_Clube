import { Router } from 'express';
import teamsRouter from './teamsRouter';
import userRouter from './userRouter';

const router = Router();

router.use('/teams', teamsRouter);
router.use('/login', userRouter);

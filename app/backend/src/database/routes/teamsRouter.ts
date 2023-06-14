import { Request, Router, Response } from 'express';
import TeamController from '../controllers/TeamController';

const router = Router();

router.get('/', (req: Request, res: Response) => TeamController.getAllTeams(req, res));

export default router;

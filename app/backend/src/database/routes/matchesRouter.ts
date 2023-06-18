import { Router } from 'express';
import MatchController from '../controllers/MatchesController';
import validateToken from '../middlewares/validateToken';

const router = Router();

router.get('/', MatchController.getAllMatches);
router.patch('/:id/finish', validateToken, MatchController.updateMatcheByIdFinish);
router.patch('/:id', validateToken, MatchController.updateMatcheById);

export default router;

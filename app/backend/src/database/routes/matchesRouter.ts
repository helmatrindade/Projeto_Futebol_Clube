import { Router } from 'express';
import MatchController from '../controllers/MatchesController';
import validateToken from '../middlewares/validateToken';
import validateTeams from '../middlewares/validateTeams';

const router = Router();

router.get('/', MatchController.getAllMatches);
router.patch('/:id/finish', validateToken, MatchController.updateMatcheByIdFinish);
router.patch('/:id', validateToken, MatchController.updateMatcheById);
router.post('/', validateToken, validateTeams, MatchController.createMatches);

export default router;

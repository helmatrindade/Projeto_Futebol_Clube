import { Router } from 'express';
import MatchController from '../controllers/MatchesController';
import validateToken from '../middlewares/validateToken';

const router = Router();

router.get('/', MatchController.getAllMatches);
router.patch('/:id/finish', validateToken, MatchController.updateMatcheByIdFinish);
router.patch('/:id', validateToken, MatchController.updateMatcheById);
router.post('/', validateToken, MatchController.createMatches);

export default router;

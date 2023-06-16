import { Router } from 'express';
import MatchController from '../controllers/MatchesController';

const router = Router();

router.get('/', MatchController.getAllMatches);

export default router;

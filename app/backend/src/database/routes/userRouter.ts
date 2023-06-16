import { Request, Router, Response } from 'express';
import UserController from '../controllers/UserController';
import validateLogin from '../middlewares/validationLogin';
import validateToken from '../middlewares/validateToken';

const router = Router();

router.get(
  '/role',
  validateToken,
  (req: Request, res: Response) => UserController.getUserRole(req, res),
);
router.post('/', validateLogin, (req: Request, res: Response) => UserController.login(req, res));

export default router;

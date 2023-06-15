import { Request, Router, Response } from 'express';
import UserController from '../controllers/UserController';
import validateLogin from '../middlewares/validationLogin';

const router = Router();

router.post('/', validateLogin, (req: Request, res: Response) => UserController.login(req, res));

export default router;

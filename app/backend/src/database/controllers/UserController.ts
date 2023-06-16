import { Request, Response } from 'express';
import { verifyToken } from '../middlewares/validateToken';
import UserService from '../services/UserService';

export default class UserController {
  public static async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const { data, status } = await UserService.login(email, password);

    if (status === 401) return res.status(401).json({ message: 'Invalid email or password' });

    return res.status(200).json(data);
  }

  public static async getUserRole(req: Request, res: Response): Promise<Response> {
    // const { role } = req.body;
    const role = verifyToken(req.headers.authorization as string);
    return res.status(200).json({ role: JSON.parse(JSON.stringify(role)).role });
  }
}

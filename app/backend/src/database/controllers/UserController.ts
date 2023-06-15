import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UserController {
  public static async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const { data, status } = await UserService.login(email, password);

    if (status === 401) return res.status(401).json({ message: 'Invalid email or password' });

    return res.status(200).json(data);
  }
}

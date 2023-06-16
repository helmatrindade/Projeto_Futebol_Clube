import { compareSync } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import UserModel from '../models/UserModel';

interface RetornoService {
  status: number;
  message?: string;
  data?: unknown;
}

export default class UserService {
  public static async login(email: string, password: string): Promise<RetornoService> {
    const user = await UserModel.findOne({ where: { email } });
    if (!user) {
      return { status: 401, message: 'Invalid email or password' };
    }

    const validatePassword = compareSync(password, user.password);

    if (!validatePassword) {
      return { status: 401, message: 'Invalid email or password' };
    }
    // Token está criando o token com o id, email, role e username do usuário e a chave secreta.
    const token = sign({
      id: user.id,
      email: user.email,
      role: user.role,
      username: user.username,
    }, 'jwt_secret');
    return { status: 200, data: { token } };
  }
}

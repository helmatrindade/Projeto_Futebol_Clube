import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

export const verifyToken = (token: string) => {
  const decoded = verify(token, 'jwt_secret');
  return decoded;
};

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }
    verifyToken(token);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default validateToken;

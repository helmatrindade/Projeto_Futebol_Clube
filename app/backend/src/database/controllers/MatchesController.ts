import { Request, Response } from 'express';
import MatchService from '../services/MachesService';

export default class MatchController {
  public static async getAllMatches(_req: Request, res: Response): Promise<Response> {
    const serviceResponse = await MatchService.getAllMatches();
    return res.status(200).json(serviceResponse.data);
  }
}

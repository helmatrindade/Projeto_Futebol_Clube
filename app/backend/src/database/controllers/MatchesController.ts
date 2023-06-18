import { Request, Response } from 'express';
import MatchService from '../services/MachesService';

export default class MatchController {
  public static async getAllMatches(_req: Request, res: Response): Promise<Response> {
    const { inProgress } = _req.query;

    if (inProgress === 'true' || inProgress === 'false') {
      const serviceResponse = await MatchService.getMatchesInProgress(inProgress === 'true');
      return res.status(200).json(serviceResponse.data);
    }
    const serviceResponse = await MatchService.getAllMatches();
    return res.status(200).json(serviceResponse.data);
  }

  public static async updateMatcheByIdFinish(_req: Request, res: Response): Promise<Response> {
    const { id } = _req.params;
    const serviceResponse = await MatchService.updateMatcheByIdFinish(Number(id));

    if (serviceResponse.status === 'SUCCESSFUL') {
      serviceResponse.data.message = 'Finished';
    }

    return res.status(200).json(serviceResponse.data);
  }
}

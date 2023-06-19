import { Request, Response } from 'express';
import { IMatch } from '../../Interfaces/IMaches';
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

  public static async updateMatcheById(_req: Request, res: Response): Promise<Response> {
    const { id } = _req.params;
    const { homeTeamGoals, awayTeamGoals } = _req.body;

    const plays: Partial<IMatch> = {
      homeTeamGoals,
      awayTeamGoals,
    };

    const serviceResponse = await MatchService
      .updateMatcheById(Number(id), plays);

    return res.status(200).json(serviceResponse.data);
  }

  public static async createMatches(_req: Request, res: Response): Promise<Response> {
    const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals, inProgress } = _req.body;

    const newMatches: Partial<IMatch> = {
      homeTeamId,
      awayTeamId,
      homeTeamGoals,
      awayTeamGoals,
      inProgress,
    };

    const serviceResponse = await MatchService.createMatches(newMatches);

    return res.status(201).json(serviceResponse.data);
  }
}

import { Request, Response } from 'express';
import TeamService from '../services/TeamService';

export default class TeamController {
  public static async getAllTeams(_req: Request, res: Response): Promise<Response> {
    const serviceResponse = await TeamService.getAllTeams();
    return res.status(200).json(serviceResponse.data);
  }

  public static async getTeamsById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const team = await TeamService.getTeamsById(Number(id));

    if (!team) {
      return res.status(404).json({ message: `Team ${id} not found` });
    }
    return res.status(200).json(team);
  }
}

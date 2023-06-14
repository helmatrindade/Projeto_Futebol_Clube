import TeamsModel from '../models/TeamsModel';
import { ServiceResponse } from '../../Interfaces/ServiceResponse';
import { ITeam } from '../../Interfaces/ITeam';

export default class TeamService {
  public static async getAllTeams(): Promise<ServiceResponse<unknown>> {
    const allTeams = await TeamsModel.findAll();
    return { status: 'SUCCESSFUL', data: allTeams };
  }

  public static async getTeamsById(id: number): Promise<ITeam | null> {
    const teams = await TeamsModel.findAll();

    const teamById = teams.find((team) => team.id === id);
    if (!teamById) return null;
    return teamById;
  }
}

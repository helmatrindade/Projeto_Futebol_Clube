import TeamsModel from '../models/TeamsModel';
import { ServiceResponse } from '../../Interfaces/ServiceResponse';

export default class TeamService {
  public static async getAllTeams(): Promise<ServiceResponse<unknown>> {
    const allTeams = await TeamsModel.findAll();
    return { status: 'SUCCESSFUL', data: allTeams };
  }

}

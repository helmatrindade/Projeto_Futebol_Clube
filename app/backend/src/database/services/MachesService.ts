import MatchModel from '../models/MatchModel';
import { ServiceResponse } from '../../Interfaces/ServiceResponse';
import { IMatch } from '../../Interfaces/IMaches';
import TeamsModel from '../models/TeamsModel';

export default class MatchService {
  public static async getAllMatches(): Promise<ServiceResponse<IMatch[]>> {
    const allMatches = await MatchModel.findAll({
      include: [
        {
          model: TeamsModel,
          as: 'homeTeam',
          attributes: ['teamName'],
        },
        {
          model: TeamsModel,
          as: 'awayTeam',
          attributes: ['teamName'],
        },
      ],
    });
    return { status: 'SUCCESSFUL', data: allMatches };
  }
}

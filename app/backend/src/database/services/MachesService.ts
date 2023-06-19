import MatchModel from '../models/MatchModel';
import { ServiceResponse } from '../../Interfaces/ServiceResponse';
import { IMatch } from '../../Interfaces/IMaches';
import TeamsModel from '../models/TeamsModel';

export interface IMatchWithMessage extends IMatch {
  message: string;
}

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

  public static async getMatchesInProgress(inProgress: boolean)
    : Promise<ServiceResponse<IMatch[]>> {
    const matchesInProgress = await MatchModel.findAll({
      where: { inProgress,
      },
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
    return { status: 'SUCCESSFUL', data: matchesInProgress };
  }

  public static async updateMatcheByIdFinish(id: number)
    : Promise<ServiceResponse<IMatchWithMessage>> {
    const matches = await MatchModel.findByPk(id, {
      attributes: [
        'id',
        'homeTeamId',
        'homeTeamGoals',
        'awayTeamId',
        'awayTeamGoals',
        'inProgress',
      ],
    });

    if (matches === null) {
      return { status: 'NOT_FOUND', data: { message: 'Matches not found' } };
    }
    // Atualiza os dados do jogo e salva no banco de dados.
    matches.inProgress = false;
    await matches.save();
    // Em data  é retornado o objeto com os dados do jogo: ...matches,  mais a mensagem Finished.
    return { status: 'SUCCESSFUL', data: { ...matches, message: 'Finished' } };
  }

  // Com Partial permite que apenas homeTeamGoals e awayTeamGoals  sejam atualizados.
  public static async updateMatcheById(id: number, match: Partial<IMatch>)
    : Promise<ServiceResponse<IMatch>> {
    const matches = await MatchModel.findByPk(id);

    if (matches === null) {
      return { status: 'NOT_FOUND', data: { message: 'Matches not found' } };
    }
    // Atualiza os dados do jogo.
    if (match.homeTeamGoals !== undefined) {
      matches.homeTeamGoals = match.homeTeamGoals;
    }
    if (match.awayTeamGoals !== undefined) {
      matches.awayTeamGoals = match.awayTeamGoals;
    }
    // salva no banco de dados
    await matches.save();

    return { status: 'SUCCESSFUL', data: matches };
  }

  // Partial indica que as propriedades de IMatch são opcionais.
  public static async createMatches(matches: Partial<IMatch>)
    : Promise<ServiceResponse<IMatch>> {
    const creatematches = await MatchModel.create({
      homeTeamId: matches.homeTeamId,
      awayTeamId: matches.awayTeamId,
      homeTeamGoals: matches.homeTeamGoals,
      awayTeamGoals: matches.awayTeamGoals,
      inProgress: true,
    });
    return { status: 'SUCCESSFUL', data: creatematches };
  }
}

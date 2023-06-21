export interface ITeam {
  id: number;
  teamName: string;
}

export interface ModelTeam {
  findAll: () => Promise<ITeam[]>;
  findByPk: (id: number) => Promise<ITeam | null>;
}

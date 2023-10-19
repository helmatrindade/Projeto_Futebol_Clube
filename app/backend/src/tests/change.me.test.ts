import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';
import { TeamMock } from './Mock/teams.Mock';
import { Model } from 'sequelize';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teams Api', () => {
  let findAllStub: sinon.SinonStub;

  beforeEach(() => {
    findAllStub = sinon.stub(Example, 'findAll');
    findAllStub.returns(
      Promise.resolve(TeamMock) as unknown as Promise<Model<any, any>[]>
    );
  });

  afterEach(() => {
    findAllStub.restore();
  });

  it('Recupera um time por id', async () => {
    const response = await chai.request(app).get('/teams/1');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({
      id: 1,
      teamName: 'Avaí/Kindermann',
    });
  });

  it('deve retornar 404 para time inexistente', async () => {
    const response = await chai.request(app).get('/teams/999');

    expect(response.status).to.equal(404);
    expect(response.body).to.deep.equal({ message: 'Team 999 not found' });
  });

  it('Retornar todos os times', async () => {
    const response = await chai.request(app).get('/teams');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(TeamMock);
  });
});

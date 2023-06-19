import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teams Api', () => {
  it('Recupera um time por id', async () => {
    const response = await chai.request(app).get('/teams/1');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({
      id: 1,
      teamName: 'Example Team',
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
    expect(response.body).to.deep.equal([
      {
        id: 1,
        teamName: 'Example Team',
      },
    ]);
  });
});

import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

chai.use(chaiHttp);

const { expect } = chai;

describe('Matches', () => {
  it('Recupera todas as partidas', async () => {
    const response = await chai.request(app).get('/matches');

    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
  });

  it('Recupera todas as partidas em andamento', async () => {
    const response1 = await chai.request(app).post('/login').send({
      email: 'admin@admin.com',
      password: 'secret_admin',
    });

    const response = await chai.request(app).get('/matches/1/finish').set('Authorization', response1.body.token)
    .send({
      homeTeamGoals: 1,
      awayTeamGoals: 2,
    });

    expect(response.status).to.equal(404);
    expect(response.body).to.be.an('object');
  });
});
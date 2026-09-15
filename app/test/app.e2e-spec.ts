import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module.js';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('profile (GraphQL)', async () => {
    const response = await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `{ profile { name skills { name } experience { company endDate } projects { name } } }`,
      })
      .expect(200);

    expect(response.body.errors).toBeUndefined();
    expect(response.body.data.profile.name).toBe('Букреев Илья Константинович');
    expect(response.body.data.profile.skills[1].name).toBe('Node.js');
    expect(response.body.data.profile.experience[0].endDate).toBeNull();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  afterEach(async () => {
    await app.close();
  });
});

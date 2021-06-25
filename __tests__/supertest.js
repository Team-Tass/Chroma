
/*
  BEFORE TESTING:
    - Install Jest and Supertest
    - Configure the application package.json test script
*/

const request = require('supertest');
  
const server = `http://localhost:3000`;

describe('Route integration', () => {
  describe('/api/palette/all', () => {
    describe('GET', () => {
      it('Responds with status code 200 and json content type ', () => {
        return request(server)
          .get('/api/palette/all')
          .expect('Content-Type',  /json/)
          .expect(200)
      });
    });
  });

  describe('/api/palette/:id', () => {
    describe('GET', () => {
      it('Responds with status code 200 and json content type ', () => {
        return request(server)
          .get('/api/palette/:id')
          .expect('Content-Type',  /json/)
          .expect(200)
      });
    });
  });

  describe('/api/palette', () => {
    describe('POST', () => {
      it('Responds with status code 200 and json content type ', () => {
        return request(server)
          .post('/api/palette')
          // .send({enter expected request body})
          .expect('Content-Type',  /json/)
          .expect(200)
      });
    });
  });

});

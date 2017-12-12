const app = require('../server/app');
const request = require('supertest');

describe('server', () => {
  it('should send index page succesfully', (done) => {
    request(app)
      .get('/')
      .then((res) => {
        expect(res.status).toBe(200);
        done();
      });
  });

  it('should parse user information from header', (done) => {
    request(app)
      .get('/api/whoami')
      .set({
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36',
      })
      .set({ 'accept-language': 'en-US,en;q=0.9,en-GB;q=0.8' })
      .then((res) => {
        const resObj = JSON.parse(res.text);

        expect(resObj.ip).toBeTruthy();
        expect(resObj.software).toBeTruthy();
        expect(resObj.language).toBeTruthy();
        done();
      });
  });
});

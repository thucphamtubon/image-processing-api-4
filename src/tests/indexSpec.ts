import request from 'supertest';
import app from '../index';
import { getImagePath } from '../utilities/get-image-path';

describe('GET /', function () {
  it('respond with root endpoint', async function () {
    const response = await request(app).get('/').set('Accept', 'application/json');

    expect(response.status).toEqual(200);
  });
});

describe('GET /images', function () {
  it('respond with images endpoint success', async function () {
    const response = await request(app).get('/images').set('Accept', 'application/json');

    expect(response.status).toEqual(200);
  });

  it('respond with images endpoint with filename is encenadaport', async function () {
    const response = await request(app).get('/images?filename=encenadaport').set('Accept', 'application/json');

    expect(response.status).toEqual(200);
  });

  it('respond with images endpoint with filename is encenadaport, width is 300, height is 300', async function () {
    const response = await request(app)
      .get('/images?filename=encenadaport&width=300&height=300')
      .set('Accept', 'application/json');

    expect(response.status).toEqual(200);
  });

  it(`path image: failed`, async () => {
    const imagePath = await getImagePath({ filename: '12345', height: '200', width: '200' });
    expect(imagePath).toBeFalse();
  });

  it(`path image: success`, async () => {
    const imagePath = await getImagePath({ filename: 'icelandwaterfall', height: '500', width: '500' });

    expect(imagePath).not.toBeFalse();
  });
});

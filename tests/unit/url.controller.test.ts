import request from 'supertest';
import app from '../../src/app';
import mongoose from 'mongoose';
import Url from '../../src/models/url.model';

// Mock the cache functions
jest.mock('../../src/utils/cache', () => ({
  cacheUrl: jest.fn(),
  getCachedUrl: jest.fn(() => null)
}));

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI!, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('URL Controller', () => {
  it('should shorten a URL', async () => {
    const response = await request(app)
      .post('/api/shorten')
      .send({ longUrl: 'https://www.example.com' });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('shortUrl');
  });

  it('should return analytics for a shortened URL', async () => {
    const url = await Url.create({
      longUrl: 'https://www.example.com',
      shortUrl: 'short123',
      clicks: 10
    });

    const response = await request(app).get(`/api/analytics/${url.shortUrl}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('clicks', 10);
    expect(response.body).toHaveProperty('longUrl', url.longUrl);
  });
});

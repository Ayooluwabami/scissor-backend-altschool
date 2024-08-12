import request from 'supertest';
import app from '../../app';
import mongoose from 'mongoose';

// Mock the cache functions
jest.mock('../../src/utils/cache', () => ({
  cacheUrl: jest.fn(),
  getCachedUrl: jest.fn(() => null)
}));

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI!);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('URL Routes', () => {
  it('should shorten a URL and return the short URL', async () => {
    const response = await request(app)
      .post('/api/shorten')
      .send({ longUrl: 'https://www.example.com' });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('shortUrl');
  });

  it('should get URL history for a user', async () => {
    // Note: For testing URL history, you might need to mock authentication
    const response = await request(app).get('/api/history');
    
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});

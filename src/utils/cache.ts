import Redis from 'ioredis';

const redis = new Redis();

export const cacheUrl = async (longUrl: string, shortUrl: string) => {
  await redis.set(longUrl, shortUrl);
};

export const getCachedUrl = async (longUrl: string) => {
  const shortUrl = await redis.get(longUrl);
  if (shortUrl) {
    return { longUrl, shortUrl };
  }
  return null;
};

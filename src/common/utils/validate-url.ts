import { parse } from 'url';

export const validateUrl = (url: string) => {
  try {
    const parsedUrl = parse(url);
    return parsedUrl.protocol && parsedUrl.host;
  } catch {
    return false;
  }
};


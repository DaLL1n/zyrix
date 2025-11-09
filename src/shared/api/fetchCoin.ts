import { handleApiResponse } from '../lib';

const baseUrl = 'https://api.coingecko.com/api/v3';
const apiKEY = process.env.API_KEY_COINS;

export const getCoin = (
  endpoint: string,
  queryParams?: string,
  options?: RequestInit,
): Promise<unknown> => {
  const url = `${baseUrl}${endpoint}${queryParams ? `?${queryParams}` : ''}`;

  return fetch(url, {
    method: 'GET',
    headers: {
      'x-cg-demo-api-key': apiKEY ?? '',
    },
    ...options,
  })
    .then(handleApiResponse)
    .catch((err) => {
      console.error(`Ошибка при запросе:`, err);
      throw err;
    });
};

const POST = (endpoint: string) => {};

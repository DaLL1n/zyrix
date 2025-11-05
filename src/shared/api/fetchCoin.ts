import { handleApiResponse } from '../lib';

const baseUrl = 'https://api.coingecko.com/api/v3';
const apiKEY = process.env.API_KEY_COINS;

export const GetCoin = (
  endpoint: string,
  queryParams?: string,
): Promise<unknown> => {
  return fetch(`${baseUrl}${endpoint}?${queryParams}`, {
    method: 'GET',
    headers: {
      'x-cg-demo-api-key': apiKEY ?? '',
    },
  })
    .then(handleApiResponse)
    .catch((err) => {
      console.error(`Ошибка при запросе:`, err);
      throw err;
    });
};

const POST = (endpoint: string) => {};

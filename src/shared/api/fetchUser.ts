import { handleApiResponse } from '../lib';

const baseUrl =
  'https://studio.teseron.io/rest/studio.1z1426u.2nvj7/domain/users';

export const getUser = (): Promise<unknown> => {
  return fetch(baseUrl)
    .then(handleApiResponse)
    .then((data) => data)
    .catch((err) => {
      console.error(`Ошибка при запросе:`, err);
      throw err;
    });
};

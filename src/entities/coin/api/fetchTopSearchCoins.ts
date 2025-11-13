import { getCoin } from '@/shared/api';
import { topSearchCoinSchema, type TopSearchCoin } from '../model/schemas';

const endpoint = '/search/trending';

const fetchTopSearchCoins = (): Promise<TopSearchCoin> =>
  getCoin(endpoint, undefined, {
    next: { revalidate: 60 },
  }).then((data) => topSearchCoinSchema.parse(data));

export default fetchTopSearchCoins;

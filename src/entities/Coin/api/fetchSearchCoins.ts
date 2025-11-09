import { getCoin } from '@/shared/api';
import { searchCoinsSchema, type SearchCoins } from '../model/schemas';

const endpoint = '/search';
const queryParams = 'vs_currency=usd&price_change_percentage=24h&precision=2';

const fetchSearchCoins = (): Promise<SearchCoins> =>
  getCoin(endpoint, queryParams).then((data) => searchCoinsSchema.parse(data));

export default fetchSearchCoins;

import { GetCoin } from '@/shared/api';
import { coinSchema, type TrendMarket } from '../model/schemas';

const endpoint = '/coins/markets';
const queryParams =
  'vs_currency=usd&price_change_percentage=24h&per_page=6&sparkline=true&include_tokens=top&precision=2&sparkline=true';

const fetchTrendCoins = (): Promise<TrendMarket> =>
  GetCoin(endpoint, queryParams).then((data) => coinSchema.parse(data));

export default fetchTrendCoins;

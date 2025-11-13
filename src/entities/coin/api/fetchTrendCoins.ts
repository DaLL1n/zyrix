import { getCoin } from '@/shared/api';
import { trendMarketSchema, type TrendMarket } from '../model/schemas';

const endpoint = '/coins/markets';
const queryParams =
  'vs_currency=usd&price_change_percentage=24h&per_page=6&sparkline=true&include_tokens=top&precision=2&sparkline=true';

const fetchTrendCoins = (): Promise<TrendMarket> =>
  getCoin(endpoint, queryParams).then((data) => trendMarketSchema.parse(data));

export default fetchTrendCoins;

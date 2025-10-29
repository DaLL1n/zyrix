import { GetCoins } from '@/shared/api';
import { trendSchema, type Trend } from '../model/schemas';

const endpoint = '/coins/markets';
const queryParams =
  'vs_currency=usd&price_change_percentage=24h&per_page=6&sparkline=true&include_tokens=top&precision=2&sparkline=true';

const fetchTrendCoins = (): Promise<Trend> =>
  GetCoins(endpoint, queryParams).then((data) => trendSchema.parse(data));

export default fetchTrendCoins;

import type { SearchCoins, TopSearchCoin } from '../model/schemas';

const normalizeCoinData = (coins: TopSearchCoin | SearchCoins) => {
  if (!coins) return [];

  if (
    'coins' in coins &&
    Array.isArray(coins.coins) &&
    'item' in coins.coins[0]
  ) {
    return coins.coins.map((coin) => {
      const items = coin.item;
      return {
        id: items.id,
        name: items.name,
        symbol: items.symbol,
        image: items.small,
        price: items.data.price,
        priceChange24h: items.data.price_change_percentage_24h.usd,
      };
    });
  }

  if (Array.isArray(coins)) {
    return coins.map((coin) => {
      return {
        id: coin.id,
        name: coin.name,
        symbol: coin.symbol,
        image: coin.image,
        price: coin.current_price,
        priceChange24h: coin.price_change_percentage_24h,
      };
    });
  }
};

export default normalizeCoinData;

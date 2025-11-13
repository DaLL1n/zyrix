import z from 'zod';

const baseCoinSchema = z.object({
  id: z.string(),
  symbol: z.string(),
  name: z.string(),
});

// (/coins/markets)
export const trendMarketSchema = z.array(
  baseCoinSchema.extend({
    image: z.string(),
    current_price: z.number(),
    price_change_percentage_24h: z.number(),
    sparkline_in_7d: z.object({
      price: z.array(z.number()),
    }),
  }),
);
export type TrendMarket = z.infer<typeof trendMarketSchema>;

// (/search/trending)
export const topSearchCoinSchema = z.object({
  coins: z.array(
    z.object({
      item: baseCoinSchema.extend({
        small: z.string(),
        data: z.object({
          price: z.number(),
          price_change_percentage_24h: z.object({
            usd: z.number(),
          }),
        }),
      }),
    }),
  ),
});
export type TopSearchCoin = z.infer<typeof topSearchCoinSchema>;

// (/search)
export const searchCoinsSchema = z.array(
  baseCoinSchema.extend({
    image: z.string(),
    current_price: z.number(),
    price_change_percentage_24h: z.number(),
  }),
);
export type SearchCoins = z.infer<typeof searchCoinsSchema>;

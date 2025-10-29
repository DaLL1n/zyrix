import z from 'zod';

export const trendSchema = z.array(
  z.object({
    id: z.string(),
    symbol: z.string(),
    name: z.string(),
    current_price: z.number(),
    price_change_percentage_24h: z.number(),
    sparkline_in_7d: z.object({
      price: z.array(z.number()),
    }),
  }),
);

export type Trend = z.infer<typeof trendSchema>;

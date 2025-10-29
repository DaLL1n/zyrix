'use client';

import React, { useCallback } from 'react';
import './MarketTrend.scss';
import { useQuery } from '@tanstack/react-query';
import { fetchTrendCoins } from '@/entities/Coin';

import { formatCurrency } from '@/shared/lib';
import Link from 'next/link';
import { CoinIcon, SparklineChartMarketTrend } from '@/shared/ui';
import PATH from '@/shared/config/paths.config';

interface MarketTrendProps {}

const MarketTrend = ({}: MarketTrendProps) => {
  const queryMarketTrend = useQuery({
    queryFn: () => fetchTrendCoins(),
    queryKey: ['market-trend'],
  });

  const { data } = queryMarketTrend;

  const isPriceUp24h = useCallback(
    (coin: { price_change_percentage_24h: number }) =>
      coin.price_change_percentage_24h >= 0,
    [data],
  );

  return (
    <section className="market-trend">
      <div className="container container--narrow">
        <h2 className="market-trend">
          <span className="select-word">Market</span>
          Trend
        </h2>
        <table className="market-trend__table">
          <thead>
            <tr>
              <th className="market-trend__table-header">#</th>
              <th className="market-trend__table-header">Name</th>
              <th className="market-trend__table-header">Price</th>
              <th className="market-trend__table-header">24h Changes</th>
              <th className="market-trend__table-header">Chart</th>
              <th className="market-trend__table-header">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((coin, index) => (
              <tr className="market-trend__coin-info" key={coin.id}>
                <td className="market-trend__cell market-trend__cell--coin-rating">
                  {index + 1}
                </td>
                <td className="market-trend__cell market-trend__cell--coin-name">
                  <div>
                    <CoinIcon
                      coinName={coin.symbol.toUpperCase()}
                      size="large"
                      variant="base"
                    />
                    <span>{coin.name}</span>
                    <span>{coin.symbol.toUpperCase()}</span>
                  </div>
                </td>
                <td className="market-trend__cell market-trend__cell--coin-price">
                  {formatCurrency(coin.current_price)}
                </td>
                <td
                  className="market-trend__cell market-trend__cell--coin-changes"
                  style={{ color: isPriceUp24h(coin) ? '#4CAF50' : '#D32F2F' }}
                >
                  <span>
                    {isPriceUp24h(coin) && '+'}
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </span>
                </td>
                <td className="market-trend__cell market-trend__cell--chart">
                  <SparklineChartMarketTrend
                    data={coin.sparkline_in_7d.price}
                    color={isPriceUp24h(coin) ? '#4CAF50' : '#D32F2F'}
                  />
                </td>
                <td className="market-trend__cell market-trend__cell--link-trade">
                  <Link href={`${PATH.SPOT}/${coin.id}`}>Trade</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MarketTrend;

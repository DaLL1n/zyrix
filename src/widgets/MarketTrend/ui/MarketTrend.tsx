'use client';

import './MarketTrend.scss';
import {
  fetchTrendCoins,
  getPriceChangeColor,
  isPriceUp24h,
} from '@/entities/coin';

import { formatCurrency } from '@/shared/lib';
import Link from 'next/link';
import { SparklineChartMarketTrend, Loader } from '@/shared/ui';
import PATH from '@/shared/config/paths.config';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';

const MarketTrend = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['trendCoins'],
    queryFn: fetchTrendCoins,
  });

  if (isLoading) {
    return (
      <section className="market-trend">
        <div className="container container--narrow">
          <h2 className="market-trend__title">
            <span className="select-word">Market</span> Trend
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
            <Loader />
          </div>
        </div>
      </section>
    );
  }

  if (isError || !data) {
    return (
      <section className="market-trend">
        <div className="container container--narrow">
          <h2 className="market-trend__title">
            <span className="select-word">Market</span> Trend
          </h2>
          <p style={{ textAlign: 'center', padding: '2rem' }}>
            Failed to load market trends
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="market-trend">
      <div className="container container--narrow">
        <h2 className="market-trend__title">
          <span className="select-word">Market</span> Trend
        </h2>
        <table className="market-trend__table">
          <thead>
            <tr>
              <th className="market-trend__table-header">#</th>
              <th className="market-trend__table-header">Name</th>
              <th className="market-trend__table-header">Price</th>
              <th className="market-trend__table-header">24h Changes</th>
              <th className="market-trend__table-header market-trend__table-header--chart">
                Chart
              </th>
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
                    <Image
                      className="market-trend__coin-icon"
                      src={coin.image}
                      alt={coin.name}
                      width={32}
                      height={32}
                    />
                    <span className="market-trend__coin-name">{coin.name}</span>
                    <span className="market-trend__coin-symbol">
                      {coin.symbol.toUpperCase()}
                    </span>
                  </div>
                </td>
                <td className="market-trend__cell market-trend__cell--coin-price">
                  {formatCurrency(coin.current_price)}
                </td>
                <td
                  className="market-trend__cell market-trend__cell--coin-changes"
                  style={{
                    color: getPriceChangeColor(
                      coin.price_change_percentage_24h,
                    ),
                  }}
                >
                  <span>
                    {isPriceUp24h(coin.price_change_percentage_24h) && '+'}
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </span>
                </td>
                <td className="market-trend__cell market-trend__cell--chart">
                  <SparklineChartMarketTrend
                    data={coin.sparkline_in_7d.price}
                    color={getPriceChangeColor(
                      coin.price_change_percentage_24h,
                    )}
                  />
                </td>
                <td className="market-trend__cell market-trend__cell--link-trade">
                  <Link href={`${PATH.SPOT}/${coin.id}`}>
                    <span className="select-word">Trade</span>
                  </Link>
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

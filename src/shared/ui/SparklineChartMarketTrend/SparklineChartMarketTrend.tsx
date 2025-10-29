'use client';

import React from 'react';
import './SparklineChartMarketTrend.scss';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

interface SparklineChartMarketTrendProps {
  data: number[];
  color: '#4CAF50' | '#D32F2F';
  height?: number;
}

const SparklineChartMarketTrend = ({
  data,
  color,
  height = 53,
}: SparklineChartMarketTrendProps) => {
  const chartData = data.map((price, index) => ({
    price: price,
    index: index,
  }));

  const minPrice = Math.min(...data);
  const maxPrice = Math.max(...data);

  const filterId = `glow-${Math.random().toString(36).substring(7)}`;
  return (
    <ResponsiveContainer
      className="responsive-container"
      width="100%"
      height={height}
      minWidth={0}
    >
      <LineChart
        data={chartData}
        margin={{ top: 29, right: 0, left: 5, bottom: 10 }}
        responsive
      >
        <defs>
          {/* 3. Обновляем фильтр для эффекта свечения */}
          <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="0" // --- Смещение по X (0 для свечения)
              dy="6" // --- Смещение по Y (0 для свечения)
              stdDeviation="4" // --- Сила размытия (увеличили)
              floodColor={color} // Цвет свечения
              floodOpacity="1" // Прозрачность (увеличили)
            />
          </filter>
        </defs>
        <XAxis dataKey="index" hide />
        <YAxis hide domain={[minPrice, maxPrice]} />

        <Line
          type="monotone"
          dataKey="price"
          stroke={color}
          dot={false}
          strokeWidth="0.83"
          isAnimationActive={false}
          filter={`url(#${filterId})`}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SparklineChartMarketTrend;

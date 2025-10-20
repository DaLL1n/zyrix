import React from 'react';
import './KeyMetrics.scss';

const KeyMetrics = () => {
  return (
    <section className="key-metrics">
      <h2 className="visually-hidden">
        Zyrix: A Trusted Global Crypto Exchange by the Numbers
      </h2>
      <div className="container container--narrow">
        <div className="key-metrics__wrapper">
          <ul className="key-metrics__list">
            <li className="key-metrics__item">
              <span className="key-metrics__value">150</span>
              <span className="key-metrics__label">Countries Covered</span>
            </li>
            <li className="key-metrics__item">
              <span className="key-metrics__value">30M</span>
              <span className="key-metrics__label">Global Investors</span>
            </li>
            <li className="key-metrics__item">
              <span className="key-metrics__value">700+</span>
              <span className="key-metrics__label">Coins</span>
            </li>
            <li className="key-metrics__item">
              <span className="key-metrics__value">$1.54B</span>
              <span className="key-metrics__label">24h Trading Volume</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;

import React from 'react';
import './FeaturesOverview.scss';
import { CoinIcon, Icon } from '@/shared/ui';

const FeaturesOverview = () => {
  return (
    <section className="features-overview">
      <div className="container container--narrow">
        <h2 className="features-overview__title">
          <span className="select-word">Powering</span> Your Crypto Journey
        </h2>
        <ul className="features-overview__list">
          <li className="features-overview__item">
            <div className="features-overview__card-graphic">
              <Icon
                className="features-overview__card-icon"
                iconId="data-insight-graph"
                width={326}
                height={344}
              />
              <div className="features-overview__card-content">
                <h2 className="features-overview__card-title">
                  <span className="select-word">Gain Valuable</span> Insight
                </h2>
                <p className="features-overview__card-description">
                  Unlock data-driven insights to&nbsp;make smarter crypto
                  decisions.
                </p>
              </div>
            </div>
          </li>
          <li className="features-overview__item">
            <div className="features-overview__card-graphic features-overview__card-graphic--oval">
              <Icon
                className="features-overview__card-icon"
                iconId="crypto-transfer"
                width={326}
                height={344}
              />
              <div className="features-overview__card-content">
                <h2 className="features-overview__card-title">
                  <span className="select-word">Quick</span> Transactions
                </h2>
                <p className="features-overview__card-description">
                  Send and receive crypto instantly with lightning-fast
                  transaction speeds.
                </p>
              </div>
            </div>
          </li>
          <li className="features-overview__item">
            <div className="features-overview__card-graphic">
              <Icon
                className="features-overview__card-icon"
                iconId="financial-overview-chart"
                width={326}
                height={344}
              />
              <div className="features-overview__card-content">
                <h2 className="features-overview__card-title">
                  <span className="select-word">Financial</span> Overview
                </h2>
                <p className="features-overview__card-description">
                  Get a&nbsp;clear, comprehensive view of&nbsp;your crypto
                  portfolio and finances.
                </p>
              </div>
            </div>
          </li>
          <li className="features-overview__item features-overview__item--horisontal">
            <div className="features-overview__card-graphic">
              <div className="features-overview__card-content">
                <h2 className="features-overview__card-title">
                  <span className="select-word">Trusted</span> exchange platform
                </h2>
                <p className="features-overview__card-description">
                  Empowering you to&nbsp;streamline your crypto transactions
                  effortlessly while keeping you ahead in&nbsp;the ever-evolving
                  decentralized finance ecosystem. Join a&nbsp;network
                  of&nbsp;forward-thinkers who trust our secure and innovative
                  solutions to&nbsp;navigate the world of&nbsp;digital assets
                  with confidence and ease
                </p>
              </div>
              <div className="features-overview__coin-showcase">
                <div className="features-overview__coin-showcase-inner">
                  <ul className="features-overview__coin-list-top">
                    <li>
                      <CoinIcon coinName="LSK" variant="white" size="xxlarge" />
                    </li>
                    <li>
                      <CoinIcon coinName="ION" variant="white" size="xxlarge" />
                    </li>
                    <li>
                      <CoinIcon
                        coinName="BTC"
                        variant="colored"
                        size="xxlarge"
                      />
                    </li>
                    <li>
                      <CoinIcon coinName="DCT" variant="white" size="xxlarge" />
                    </li>
                    <li>
                      <CoinIcon coinName="TMC" variant="white" size="xxlarge" />
                    </li>
                  </ul>
                  <ul className="features-overview__coin-list-bottom">
                    <li>
                      <CoinIcon
                        coinName="QTUM"
                        variant="white"
                        size="xxlarge"
                      />
                    </li>
                    <li>
                      <CoinIcon coinName="INS" variant="white" size="xxlarge" />
                    </li>
                    <li>
                      <CoinIcon coinName="ETH" variant="white" size="xxlarge" />
                    </li>
                    <li>
                      <CoinIcon coinName="QKC" variant="white" size="xxlarge" />
                    </li>
                    <li>
                      <CoinIcon
                        coinName="AERON"
                        variant="white"
                        size="xxlarge"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FeaturesOverview;

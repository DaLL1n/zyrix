import { Icon } from '@/shared/ui';

import './page.scss';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <h1 className="hero__title">
              Trade, Invest, and Build Your{' '}
              <span className="select-word">Future</span>!
            </h1>
            <div className="hero__advantages">
              <span className="hero__advantage">Safe</span>
              <span className="hero__advantage">Fast</span>
              <span className="hero__advantage">Stable</span>
              <span className="hero__advantage">Reliable</span>
            </div>
            <Link className="hero__cta" href="/sign-up">
              Start Trading
            </Link>
          </div>
          <div className="hero__earth-wrapper">
            <Icon
              className="hero__earth-big"
              iconId="hero-earth-big"
              width={523}
              height={706}
            />
            <Icon
              className="hero__earth-medium"
              iconId="hero-earth-medium"
              width={465}
              height={535}
            />
            <Icon
              className="hero__earth-small"
              iconId="hero-earth-small"
              width={346}
              height={334}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

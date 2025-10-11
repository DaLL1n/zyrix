import React from 'react';
import './Header.scss';
import { Icon, Logo, NavMenu } from '@/shared';
import Link from 'next/link';

interface NavItems {
  item: string;
  path: string;
}
const navItems: NavItems[] = [
  { item: 'Market', path: '/market' },
  { item: 'Spot', path: '/spot' },
  { item: 'Support', path: '/support' },
  { item: 'Blog', path: '/blogPost' },
];

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__main-navigation">
            <Logo purpose="header" />
            <NavMenu navItems={navItems} />
          </div>
          <div className="header__service-navigation">
            <button className="header__search-btn" type="button">
              <Icon
                className="header__search-icon"
                iconId="search"
                width={24}
                height={24}
              />
            </button>
            <button className="header__language-change-btn" type="button">
              <Icon
                className="header__language-change-icon"
                iconId="earth"
                width={24}
                height={24}
              />
            </button>
            <Link className="header__wallet-link" href="/wallet/assets">
              <Icon
                className="header__wallet-icon"
                iconId="empty-wallet"
                width={24}
                height={24}
              />
            </Link>
            <Link className="header__notification-link" href="/notification">
              <Icon
                className="header__notification-icon"
                iconId="notification"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

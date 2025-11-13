import './Header.scss';
import { Logo, NavMenu } from '@/shared/ui';
import Link from 'next/link';
import { navItems } from '../model/navItems';

import HeaderActions from './HeaderActions/HeaderActions';
import PATH from '@/shared/config/paths.config';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__main-navigation">
            <Logo purpose="header" width={106} height={36} />
            <NavMenu purpose="header" navItems={navItems} />
          </div>
          <div className="header__controls">
            <div className="header__auth">
              <HeaderActions />
              <Link
                className="header__auth-link header__auth-link--primary"
                href={PATH.AUTH}
              >
                Sign in
              </Link>
              <Link
                className="header__auth-link header__auth-link--secondary"
                href={PATH.AUTH}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

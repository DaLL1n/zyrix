import './Header.scss';
import { Button, Logo, NavMenu } from '@/shared/ui';
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
              <Button
                className="header__auth-link"
                href={PATH.SIGN_UP}
                variant="primary"
              >
                Sign in
              </Button>
              <Button
                className="header__auth-link"
                href={PATH.LOGIN}
                variant="secondary"
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { Logo, NavMenu, SocialList } from '@/shared/ui';
import { socialListItems } from '../model/socialListItems';
import { navMenuItems } from '../model/navMenuItems';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__top">
            <div className="footer__logo">
              <Logo purpose="footer" width={140} height={51} />
            </div>
            <div className="footer__top-line"></div>
            <div className="footer__social-list">
              <SocialList itemsList={socialListItems} />
            </div>
          </div>
          <NavMenu purpose="footer" navItems={navMenuItems} />
        </div>
        <div className="footer__copyright-wrapper">
          <p className="footer__copyright-text">
            Copy Right 2013-2025 Zyrix lnc. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

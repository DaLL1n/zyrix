import Image from 'next/image';
import React from 'react';
import logo from '../icons/Logo.svg';
import Link from 'next/link';
import './Logo.scss';

interface LogoProps {
  purpose: 'header' | 'footer';
}

const Logo = ({ purpose = 'header' }: LogoProps) => {
  return (
    <Link className={`${purpose}__logo-link`} href="/">
      {purpose === 'header' ? (
        <Image
          className={`${purpose}__logo-icon`}
          src={logo}
          alt="logo"
          width={114}
          height={48}
        />
      ) : (
        <Image
          className={`${purpose}__logo-icon`}
          src={logo}
          alt="logo"
          width={140}
          height={51}
        />
      )}
    </Link>
  );
};

export default Logo;

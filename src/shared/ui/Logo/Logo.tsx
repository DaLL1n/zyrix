import React from 'react';
import Link from 'next/link';
import './Logo.scss';
import Icon from '../Icon/Icon';

interface LogoProps {
  purpose: 'header' | 'footer' | 'auth';
  width: number;
  height: number;
}

const Logo = ({ purpose = 'header', height, width }: LogoProps) => {
  return (
    <Link className={`logo-link logo-link--${purpose}`} href="/">
      <Icon iconId={`${purpose}-logo`} width={width} height={height} />
    </Link>
  );
};

export default Logo;

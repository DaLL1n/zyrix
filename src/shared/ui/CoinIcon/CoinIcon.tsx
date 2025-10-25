import React from 'react';
import styles from './CoinIcon.module.scss';
import clsx from 'clsx/lite';

interface CoinIconProps extends React.SVGAttributes<SVGElement> {
  variant: 'base' | 'colored' | 'white';
  size?: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
  coinName: string;
}

const CoinIcon = ({ coinName, variant, size, ...props }: CoinIconProps) => {
  return (
    <svg
      className={clsx(
        styles['coin-icon'],
        styles[variant],
        size && styles[size],
      )}
      aria-hidden="true"
      {...props}
    >
      <use href={`/coin-icons.svg#${coinName}-${variant}`}></use>
    </svg>
  );
};

export default CoinIcon;

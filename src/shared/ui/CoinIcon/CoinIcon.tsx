import React from 'react';
import styles from './CoinIcon.module.scss';
import clsx from 'clsx/lite';

interface CoinIconProps extends React.SVGAttributes<SVGElement> {
  variant: 'base' | 'colored' | 'white';
  size: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
  coinName: string;
}

const CoinIcon = ({
  coinName,
  variant,
  size = 'medium',
  ...props
}: CoinIconProps) => {
  return (
    <svg
      className={clsx(styles[size], props.className)}
      aria-hidden="true"
      {...props}
    >
      <use href={`/coin-icons.svg#${coinName}-${variant}`}></use>
    </svg>
  );
};

export default CoinIcon;

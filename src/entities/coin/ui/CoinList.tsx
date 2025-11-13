import styles from './CoinList.module.scss';
import Link from 'next/link';
import normalizeCoinData from '../lib/normalizeCoinData';
import type { SearchCoins, TopSearchCoin } from '../model/schemas';
import PATH from '@/shared/config/paths.config';
import Image from 'next/image';
import { formatCurrency } from '@/shared/lib';
import { getPriceChangeColor, isPriceUp24h } from '../lib/helpers';
import { Icon } from '@/shared/ui';
import { memo } from 'react';

interface CoinList {
  coins: TopSearchCoin | SearchCoins;
}

interface CoinListProps extends CoinList {
  currency: 'USDT' | 'BTC' | 'ETH';
}

const CoinList = memo(({ coins, currency }: CoinListProps) => {
  return (
    <ul className={styles['coin-list']}>
      {normalizeCoinData(coins)?.map((coin) => {
        return (
          <li className={styles['coin-list__item']} key={coin.id}>
            <div className={styles['coin-list__content']}>
              <Link
                className={styles['coin-list__link']}
                href={`${PATH.SPOT}/${coin.id}`}
                title={coin.name}
              >
                <div className={styles['coin-list__info']}>
                  <Image
                    className={styles['coin-list__icon']}
                    src={coin.image}
                    alt={coin.name}
                    width={24}
                    height={24}
                  />
                  <span className={styles['coin-list__name']}>
                    {coin.symbol.toUpperCase()} {currency}
                  </span>
                </div>
                <span className={styles['coin-list__price']}>
                  {formatCurrency(coin.price)}
                </span>
                <span
                  className={styles['coin-list__price-change']}
                  style={{ color: getPriceChangeColor(coin.priceChange24h) }}
                >
                  {isPriceUp24h(coin.priceChange24h) ? '+' : ''}
                  {coin.priceChange24h.toFixed(2)}%
                </span>
              </Link>
              <button
                className={`${styles['coin-list__favorite-button']} ${styles['coin-list__favorite-button--secondary']}`}
                type="button"
                aria-label={`Add ${coin.name} to favorites`}
              >
                <Icon
                  className={styles['coin-list__favorite-icon']}
                  iconId="star"
                  width={16}
                  height={16}
                />
                <Icon
                  className={`${styles['coin-list__favorite-icon']} ${styles['coin-list__favorite-icon--filled']}`}
                  iconId="star-filled"
                  width={16}
                  height={16}
                />
              </button>
              <button
                className={`${styles['coin-list__favorite-button']} ${styles['coin-list__favorite-button--primary']}`}
                style={{ display: 'none' }}
                type="button"
              >
                <Icon
                  className={`${styles['coin-list__favorite-icon']} ${styles['coin-list__favorite-icon--filled']}`}
                  iconId="star-filled"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
});

CoinList.displayName = 'CoinList';

export default CoinList;

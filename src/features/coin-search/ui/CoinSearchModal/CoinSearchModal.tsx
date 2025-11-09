'use client';
import { Input, Loader } from '@/shared/ui';
import styles from './CoinSearchModal.module.scss';
import {
  CoinList,
  fetchTopSearchCoins,
  type TopSearchCoin,
} from '@/entities/coin';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

interface CoinSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  ref?: React.Ref<HTMLButtonElement>;
}

const CoinSearchModal = ({ isOpen, onClose, ref }: CoinSearchModalProps) => {
  const [data, setData] = useState<TopSearchCoin | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (): Promise<void> => {
    if (isOpen) {
      try {
        const result = await fetchTopSearchCoins();
        setData(result);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleClose = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;
    const isClickInsideModal = modalRef.current?.contains(target);
    const isClickOnButton =
      ref && 'current' in ref && ref.current?.contains(target);

    if (!isClickInsideModal && !isClickOnButton) {
      onClose();
    }
  };

  useEffect(() => {
    fetchData();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    window.addEventListener('keydown', handleClose);
    window.addEventListener('scroll', onClose);
    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleClose);
      window.removeEventListener('scroll', onClose);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={modalRef}
      className={clsx(styles['modal-search'], {
        [styles['modal-search--open']]: isOpen,
      })}
    >
      <Input
        type="search"
        icon="search"
        placeholder="Search"
        disabled={isLoading}
      />
      <h3 className={styles['modal-search__title']}>Top Searches</h3>

      {isLoading ? <Loader /> : <CoinList coins={data!} currency="USDT" />}
    </div>
  );
};

export default CoinSearchModal;

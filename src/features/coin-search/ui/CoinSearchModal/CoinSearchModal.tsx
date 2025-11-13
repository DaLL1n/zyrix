'use client';
import styles from './CoinSearchModal.module.scss';
import { Input, Loader } from '@/shared/ui';
import { CoinList } from '@/entities/coin';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import useSearchCoins from '../../model/useSearchCoins';

interface CoinSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  ref?: React.Ref<HTMLButtonElement>;
}

const CoinSearchModal = ({ isOpen, onClose, ref }: CoinSearchModalProps) => {
  const [valueInput, setValueInput] = useState<string>('');
  const { data, isLoading, isError, searchCoins } = useSearchCoins({
    isOpen,
    valueInput,
  });
  const modalRef = useRef<HTMLDivElement>(null);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
  }, []);

  const handleClose = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      const target = event.target as Node;
      const isClickInsideModal = modalRef.current?.contains(target);
      const isClickOnButton =
        ref && 'current' in ref && ref.current?.contains(target);

      if (!isClickInsideModal && !isClickOnButton) {
        onClose();
      }
    },
    [onClose, ref],
  );

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
  }, [isOpen, handleClose, handleClickOutside, onClose]);

  return (
    <div
      ref={modalRef}
      className={clsx(styles['modal-search'], {
        [styles['modal-search--open']]: isOpen,
      })}
    >
      <Input
        onChange={handleChange}
        value={valueInput}
        type="search"
        icon="search"
        placeholder="Search"
      />
      <h3 className={styles['modal-search__title']}>Top Searches</h3>

      {isLoading ? (
        <Loader />
      ) : isError || !data || searchCoins?.length === 0 ? (
        <div className={styles['modal-search__no-data']}>
          <Image
            src="images/no-data-modal-search.png"
            alt="No data"
            width={120}
            height={150}
            loading="lazy"
          />
        </div>
      ) : (
        <CoinList coins={data} currency="USDT" />
      )}
    </div>
  );
};

export default CoinSearchModal;

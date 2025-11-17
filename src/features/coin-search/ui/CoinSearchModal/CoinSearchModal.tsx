'use client';
import styles from './CoinSearchModal.module.scss';
import { ErrorState, Input, Loader } from '@/shared/ui';
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
  const { data, searchCoins, activeQuery } = useSearchCoins({
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

  const renderSearchResults = () => {
    switch (activeQuery.status) {
      case 'pending':
        return <Loader />;
      case 'error':
        return (
          <ErrorState
            errorMessage="Failed to load data"
            onRetry={activeQuery.refetch}
          />
        );

      case 'success':
        if (
          searchCoins &&
          searchCoins.length === 0 &&
          valueInput.trim().length > 0
        )
          return (
            <div className={styles['modal-search__no-data']}>
              <Image
                src="images/no-data-modal-search.png"
                alt="No Data"
                width={150}
                height={180}
                loading="lazy"
              />
            </div>
          );
        if (data) {
          return <CoinList coins={data} currency="USDT" />;
        }

      default:
        return null;
    }
  };

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

      {renderSearchResults()}
    </div>
  );
};

export default CoinSearchModal;

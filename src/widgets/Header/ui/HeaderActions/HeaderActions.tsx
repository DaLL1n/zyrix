'use client';
import { CoinSearchModal, SearchButton } from '@/features/coin-search';

import { Icon } from '@/shared/ui';
import { useCallback, useRef, useState } from 'react';

const HeaderActions = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchButtonRef = useRef<HTMLButtonElement>(null);

  const handleCloseModal = useCallback(() => {
    setIsSearchOpen(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setIsSearchOpen((prev) => !prev);
  }, []);

  return (
    <div className="header__actions">
      <SearchButton onClick={handleOpenModal} ref={searchButtonRef} />
      <button className="header__action-button" type="button">
        <Icon iconId="earth" width={24} height={24} />
      </button>
      <CoinSearchModal
        isOpen={isSearchOpen}
        onClose={handleCloseModal}
        ref={searchButtonRef}
      />
    </div>
  );
};

export default HeaderActions;

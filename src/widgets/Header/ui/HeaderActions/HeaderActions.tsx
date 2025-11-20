'use client';
import { Button, Icon } from '@/shared/ui';
import { CoinSearchModal, SearchButton } from '@/features/coin-search';
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
      <Button className="header__action-button" type="button">
        <Icon iconId="earth" width={24} height={24} />
      </Button>
      <CoinSearchModal
        isOpen={isSearchOpen}
        onClose={handleCloseModal}
        ref={searchButtonRef}
      />
    </div>
  );
};

export default HeaderActions;

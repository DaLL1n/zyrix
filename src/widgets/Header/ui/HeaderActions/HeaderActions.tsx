'use client';
import { CoinSearchModal, SearchButton } from '@/features/coin-search';

import { Icon } from '@/shared/ui';
import { useRef, useState } from 'react';

const HeaderActions = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="header__actions">
      <SearchButton
        onClick={() => setIsSearchOpen(!isSearchOpen)}
        ref={searchButtonRef}
      />
      <button className="header__action-button" type="button">
        <Icon iconId="earth" width={24} height={24} />
      </button>
      <CoinSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        ref={searchButtonRef}
      />
    </div>
  );
};

export default HeaderActions;

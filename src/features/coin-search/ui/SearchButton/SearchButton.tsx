import { Icon } from '@/shared/ui';
import styles from './SearchButton.module.scss';
import { memo } from 'react';

interface SearchButtonProps {
  onClick: () => void;
  ref: React.Ref<HTMLButtonElement>;
}

const SearchButton = memo(({ onClick, ref }: SearchButtonProps) => {
  return (
    <button className={styles.button} type="button" onClick={onClick} ref={ref}>
      <Icon className={styles.icon} iconId="search" width={24} height={24} />
    </button>
  );
});

export default SearchButton;

import styles from './SearchButton.module.scss';
import { Button, Icon } from '@/shared/ui';
import { memo } from 'react';

interface SearchButtonProps {
  onClick: () => void;
  ref: React.Ref<HTMLButtonElement>;
}

const SearchButton = memo(({ onClick, ref }: SearchButtonProps) => {
  return (
    <Button className={styles.button} type="button" onClick={onClick} ref={ref}>
      <Icon className={styles.icon} iconId="search" width={24} height={24} />
    </Button>
  );
});

export default SearchButton;

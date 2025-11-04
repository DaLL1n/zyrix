import { Input } from '@/shared/ui';
import styles from './CoinSearchModal.module.scss';

const CoinSearchModal = () => {
  return (
    <div className={styles['modal-search']}>
      <Input type="search" icon="search" placeholder="Search" />
      <h3 className={styles['modal-search__subtitle']}>Top Searches</h3>
    </div>
  );
};

export default CoinSearchModal;

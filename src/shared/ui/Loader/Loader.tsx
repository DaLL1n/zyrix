import styles from './Loader.module.scss';
import Icon from '../Icon/Icon';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.coin}>
        <span className={styles.engraving}>
          <Icon iconId="logo-subtract" width={75} height={75} />
        </span>
      </div>
    </div>
  );
};

export default Loader;

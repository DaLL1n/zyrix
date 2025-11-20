import styles from './AuthLayout.module.scss';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={styles['auth-layout']}>
      <div className={styles['auth-layout__wrapper']}>{children}</div>
    </section>
  );
};

export default AuthLayout;

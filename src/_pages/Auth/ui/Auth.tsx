import styles from './Auth.module.scss';
import { AuthForm } from '@/features/auth';

const Auth = () => {
  return (
    <section className={styles['auth-form']}>
      <div className={styles['auth-form__wrapper']}>
        <AuthForm mode="login" />
      </div>
    </section>
  );
};

export default Auth;

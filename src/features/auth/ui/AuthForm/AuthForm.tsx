import { Logo } from '@/shared/ui';
import styles from './AuthForm.module.scss';

interface AuthFormProps {
  mode: 'login' | 'register';
}

const AuthForm = ({ mode }: AuthFormProps) => {
  return (
    <>
      <Logo purpose="auth" width={132} height={60} />
    </>
  );
};

export default AuthForm;

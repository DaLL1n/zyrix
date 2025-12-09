import styles from './AuthFormLayout.module.scss';
import { Button } from '@/shared/ui';
import { AUTH_TEXTS } from '../../model/constants';
import Link from 'next/link';

interface AuthFormLayoutProps {
  mode: 'login' | 'sign-up';
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  isLoading?: boolean;
  children?: React.ReactNode;
  authError: Error | string;
  isErrorFields?: boolean;
}

const AuthFormLayout = ({
  mode,
  onSubmit,
  isLoading = false,
  children,
  authError,
  isErrorFields = false,
}: AuthFormLayoutProps) => {
  const { submitButtonText, modePrompt, modeAction, authErrorMessage } =
    AUTH_TEXTS[mode];
  const isLogin = mode === 'login';
  const isDisabledButton = isLoading || !isErrorFields;

  return (
    <>
      <form noValidate className={styles['auth-form']} onSubmit={onSubmit}>
        <fieldset className={styles['auth-form__inputs-group']}>
          <legend className="visually-hidden">Authentication Form</legend>
          {children}
        </fieldset>
        {authError && (
          <span className={styles['auth-form__error']}>{authErrorMessage}</span>
        )}

        <Button
          className={styles['auth-form__submit-button']}
          type="submit"
          variant="primary"
          disabled={isDisabledButton}
        >
          {submitButtonText}
        </Button>
      </form>
      <div className={styles['auth-form__mode-switch']}>
        <span className={styles['auth-form__mode-switch-text']}>
          {modePrompt}
        </span>
        <Link
          className={styles['auth-form__mode-switch-link']}
          href={`/${isLogin ? 'sign-up' : 'login'}`}
        >
          {modeAction}
        </Link>
      </div>
    </>
  );
};

export default AuthFormLayout;

import styles from './AuthFormLayout.module.scss';
import { Button, Input } from '@/shared/ui';
import { AUTH_TEXTS } from '../../model/constants';
import { EmailFields } from '@/features/auth';

interface AuthFormLayoutProps {
  mode: 'login' | 'sign-up';
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  isLoading?: boolean;
  children?: React.ReactNode;
}

const AuthFormLayout = ({
  mode,
  onSubmit,
  isLoading = false,
  children,
}: AuthFormLayoutProps) => {
  const { submitButtonText, modePrompt, modeAction } = AUTH_TEXTS[mode];

  return (
    <>
      <form className={styles['auth-form']} onSubmit={onSubmit}>
        <fieldset className={styles['auth-form__inputs-group']}>
          <legend className="visually-hidden">Authentication Form</legend>
          {children}
          {mode === 'sign-up' && (
            <Input
              type="checkbox"
              id="terms"
              label={AUTH_TEXTS[mode].checkboxText}
              disabled={isLoading}
            />
          )}
        </fieldset>

        <Button
          className={styles['auth-form__submit-button']}
          type="submit"
          variant="primary"
          disabled={isLoading}
        >
          {submitButtonText}
        </Button>
      </form>
      <div className={styles['auth-form__mode-switch']}>
        <span className={styles['auth-form__mode-switch-text']}>
          {modePrompt}
        </span>
        <Button
          className={styles['auth-form__mode-switch-button']}
          href={`/${mode === 'login' ? 'sign-up' : 'login'}`}
        >
          {modeAction}
        </Button>
      </div>
    </>
  );
};

export default AuthFormLayout;

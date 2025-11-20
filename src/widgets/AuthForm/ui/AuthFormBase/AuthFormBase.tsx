import styles from './AuthFormBase.module.scss';
import { Button, Input } from '@/shared/ui';
import { AUTH_TEXTS } from '../../model/constants';

interface AuthFormBaseProps {
  mode: 'login' | 'sign-up';
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  isLoading?: boolean;
}

const AuthFormBase = ({
  mode,
  onSubmit,
  isLoading = false,
}: AuthFormBaseProps) => {
  const { submitButtonText, modePrompt, modeAction } = AUTH_TEXTS[mode];

  return (
    <>
      <form className={styles['auth-form']} onSubmit={onSubmit}>
        <fieldset className={styles['auth-form__inputs-group']}>
          <legend className="visually-hidden">Authentication Form</legend>
          <Input
            type="email"
            placeholder="Email Address"
            disabled={isLoading}
          />
          <Input type="password" placeholder="Password" disabled={isLoading} />
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

export default AuthFormBase;

import styles from './AuthMethodToggle.module.scss';
import clsx from 'clsx';
import { Button } from '@/shared/ui';

interface AuthMethodToggleProps {
  onClick: (method: 'email' | 'phone') => void;
  authMethod: 'email' | 'phone';
}

const methods = [
  { value: 'email' as const, label: 'Email' },
  { value: 'phone' as const, label: 'Phone Number' },
];

const AuthMethodToggle = ({ onClick, authMethod }: AuthMethodToggleProps) => {
  return (
    <div className={styles['auth-method-toggle']}>
      {methods.map(({ value, label }) => (
        <Button
          key={value}
          type="button"
          onClick={() => onClick(value)}
          className={clsx(styles['auth-method-toggle__button'], {
            [styles['auth-method-toggle__button--active']]:
              authMethod === value,
          })}
          aria-label={`Select ${label.toLowerCase()} authentication method`}
          aria-pressed={authMethod === value}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};

export default AuthMethodToggle;

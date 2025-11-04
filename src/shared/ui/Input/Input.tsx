import React from 'react';
import styles from './Input.module.scss';
import clsx from 'clsx';
import Icon from '../Icon/Icon';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'password' | 'email' | 'number' | 'search';
  placeholder?: string;
  maxWidth?: string | number;
  icon?: string;
}

const Input = ({
  type = 'text',
  placeholder,
  maxWidth,
  icon,
  ...props
}: InputProps) => {
  return (
    <div
      className={clsx(styles['custom-input'], {
        [styles['custom-input--search']]: type === 'search',
      })}
      style={{ maxWidth }}
    >
      {icon && <Icon iconId={icon} />}
      <input
        className={styles['custom-input__field']}
        type={type}
        placeholder={placeholder}
        name={type}
        autoComplete={type !== 'search' ? 'on' : 'off'}
        {...props}
      />
    </div>
  );
};

export default Input;

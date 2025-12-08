'use client';
import styles from './Input.module.scss';
import React, { useState } from 'react';
import clsx from 'clsx';
import Icon from '../Icon/Icon';
import PasswordToggle from './PasswordToggle';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'password' | 'email' | 'search';
  placeholder: string;
  icon?: string;
  label?: string;
  errorMessage?: string;
  isValid?: { isDirty: boolean };
}

const Input = ({
  type = 'text',
  placeholder = '',
  icon,
  label,
  errorMessage,
  isValid,
  className,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isSearch = type === 'search';
  const isPassword = type === 'password';
  const inputType = isPassword && showPassword ? 'text' : type;
  const isSuccess = !errorMessage && isValid?.isDirty;

  return (
    <div
      className={clsx(
        styles['custom-input'],
        {
          [styles['custom-input--search']]: isSearch,
          [styles['custom-input--error']]: !!errorMessage,
          [styles['custom-input--success']]: isSuccess,
        },
        className,
      )}
    >
      {icon && isSearch && <Icon iconId={icon} />}
      <label className={styles['custom-input__label']}>
        <span className={styles['custom-input__error-message']}>
          {errorMessage}
        </span>

        {label && (
          <span className={styles['custom-input__label-text']}>{label}</span>
        )}
        <input
          className={styles['custom-input__field']}
          type={inputType}
          placeholder={placeholder}
          {...props}
        />
      </label>

      {isPassword && (
        <PasswordToggle
          className={styles['custom-input__password-toggle']}
          visible={showPassword}
          onToggle={() => setShowPassword(!showPassword)}
        />
      )}
    </div>
  );
};

export default Input;

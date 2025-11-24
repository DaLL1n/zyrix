'use client';
import styles from './Input.module.scss';
import React, { useState } from 'react';
import clsx from 'clsx';
import Icon from '../Icon/Icon';
import PasswordToggle from './PasswordToggle';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'password' | 'email' | 'checkbox' | 'search';
  placeholder?: string;
  maxWidth?: string | number;
  icon?: string;
  label?: string;
}

const Input = ({
  type = 'text',
  placeholder,
  maxWidth,
  icon,
  label,
  className,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  if (type === 'checkbox') {
    return (
      <label className={clsx(styles['custom-checkbox'], className)}>
        <input type="checkbox" className="visually-hidden" {...props} />
        <span className={styles['custom-checkbox__box']}>
          <Icon iconId="check" />
        </span>
        {label && (
          <span className={styles['custom-checkbox__text']}>{label}</span>
        )}
      </label>
    );
  }

  const isSearch = type === 'search';
  const isPassword = type === 'password';
  const inputType = isPassword && showPassword ? 'text' : type;

  return (
    <div
      className={clsx(
        styles['custom-input'],
        {
          [styles['custom-input--search']]: isSearch,
        },
        className,
      )}
      style={{ maxWidth }}
    >
      {icon && isSearch && <Icon iconId={icon} />}
      <label className={styles['custom-input__label']}>
        {label && (
          <span className={styles['custom-input__label-text']}>{label}</span>
        )}
        <input
          className={styles['custom-input__field']}
          type={inputType}
          placeholder={placeholder}
          autoComplete={isSearch ? 'off' : 'on'}
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

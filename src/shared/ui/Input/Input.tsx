'use client';
import styles from './Input.module.scss';
import React, { useState } from 'react';
import clsx from 'clsx';
import Icon from '../Icon/Icon';
import PasswordToggle from './PasswordToggle';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'password' | 'email' | 'number' | 'search';
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
  const [showPassword, setShowPassword] = useState(false);

  const isSearch = type === 'search';
  const isPassword = type === 'password';
  const inputType = isPassword && showPassword ? 'text' : type;

  return (
    <div
      className={clsx(styles['custom-input'], {
        [styles['custom-input--search']]: isSearch,
      })}
      style={{ maxWidth }}
    >
      {icon && isSearch && <Icon iconId={icon} />}
      <label className={styles['custom-input__label']} htmlFor={type}>
        <input
          className={styles['custom-input__field']}
          type={inputType}
          placeholder={placeholder}
          id={type}
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

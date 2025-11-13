import React from 'react';
import styles from './Input.module.scss';
import clsx from 'clsx';
import Icon from '../Icon/Icon';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'password' | 'email' | 'number' | 'search';
  placeholder?: string;
  maxWidth?: string | number;
  icon?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
}

const Input = ({
  type = 'text',
  placeholder,
  maxWidth,
  icon,
  onChange,
  value,
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
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default Input;

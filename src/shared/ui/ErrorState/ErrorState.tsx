import React from 'react';
import './ErrorState.scss';

interface ErrorStateProps {
  errorMessage: string;
  onRetry?: () => void;
}

const ErrorState = ({ errorMessage, onRetry }: ErrorStateProps) => {
  return (
    <div className="error-message">
      <span className="error-message__text">{errorMessage}</span>
      <button
        className="error-message__button-retry"
        type="button"
        onClick={onRetry}
      >
        Reload
      </button>
    </div>
  );
};

export default ErrorState;

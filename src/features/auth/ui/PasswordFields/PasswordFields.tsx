import { Input } from '@/shared/ui';

interface PasswordFieldsProps {
  mode: 'login' | 'sign-up';
  isLoading?: boolean;
  register?: any;
  errorMessages?: {
    password?: string;
    confirmPassword?: string;
  };
  fieldState?: (name: 'password' | 'confirmPassword') => any;
}

const PasswordFields = ({
  mode,
  isLoading,
  register,
  errorMessages,
  fieldState,
}: PasswordFieldsProps) => {
  const isSignUp = mode === 'sign-up';
  return (
    <>
      <Input
        type="password"
        placeholder="Password"
        // disabled={isLoading}
        errorMessage={errorMessages?.password}
        autoComplete="new-password"
        suppressHydrationWarning={true}
        isValid={fieldState?.('password')}
        {...register?.('password')}
      />
      {isSignUp && (
        <Input
          type="password"
          placeholder="Confirm Password"
          // disabled={isLoading}
          autoComplete="new-password"
          suppressHydrationWarning={true}
          errorMessage={errorMessages?.confirmPassword}
          isValid={fieldState?.('confirmPassword')}
          {...register?.('confirmPassword')}
        />
      )}
    </>
  );
};

export default PasswordFields;

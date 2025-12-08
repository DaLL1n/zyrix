'use client';
import { Checkbox, Input, Logo } from '@/shared/ui';
import { memo, useState } from 'react';
import AuthFormLayout from './AuthFormBase/AuthFormLayout';
import {
  AuthMethodToggle,
  mapAuthErrors,
  NameFields,
  PasswordFields,
  useAuth,
  useAuthForm,
  type SignUp,
} from '@/features/auth';
import { capitalize } from '@/shared/lib';

interface AuthFormProps {
  mode: 'login' | 'sign-up';
}

const AuthForm = memo(({ mode }: AuthFormProps) => {
  const [authMethod, setAuthMethod] = useState<'email' | 'phone'>('email');
  const methods = useAuthForm<SignUp>(mode);
  const { mutate, error, isError } = useAuth(mode);

  const onSubmit = (data: SignUp) => {
    const formatted = {
      ...data,
      name: capitalize(data.name),
      surname: capitalize(data.surname),
    };
    mutate(formatted);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const isSignUp = mode === 'sign-up';
  const isEmail = authMethod === 'email';
  const isPhone = authMethod === 'phone';

  const errorsFields = mapAuthErrors(errors);

  const authError = isError ? error : '';

  return (
    <>
      <Logo purpose="auth" width={132} height={60} />
      <AuthMethodToggle authMethod={authMethod} onClick={setAuthMethod} />
      <AuthFormLayout
        mode={mode}
        onSubmit={handleSubmit((data) => onSubmit(data))}
        authError={authError}
      >
        {isSignUp && (
          <NameFields
            register={register}
            errorMessages={errorsFields.initials}
          />
        )}
        {isEmail && (
          <Input
            type="email"
            placeholder="Email Address"
            errorMessage={errorsFields.email}
            autoComplete="email"
            {...register('email')}
          />
        )}
        {/* {isPhone && <PhoneFields values={formData} />} */}
        <PasswordFields
          mode={mode}
          register={register}
          errorMessages={errorsFields.password}
        />
        {isSignUp && (
          <Checkbox
            label="By creating an account, I agree to Zyrix’s Terms and Privacy Policy"
            register={register}
            errorMessage={errorsFields.terms}
          />
        )}
      </AuthFormLayout>
    </>
  );
});

export default AuthForm;

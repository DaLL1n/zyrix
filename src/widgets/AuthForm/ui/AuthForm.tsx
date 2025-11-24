'use client';
import { Logo } from '@/shared/ui';
import { useState } from 'react';
import AuthFormLayout from './AuthFormBase/AuthFormLayout';
import { AuthMethodToggle, EmailFields } from '@/features/auth';

interface AuthFormProps {
  mode: 'login' | 'sign-up';
}

const AuthForm = ({ mode }: AuthFormProps) => {
  const [authMethod, setAuthMethod] = useState<'email' | 'phone'>('email');

  return (
    <>
      <Logo purpose="auth" width={132} height={60} />
      <AuthMethodToggle authMethod={authMethod} onClick={setAuthMethod} />
      <AuthFormLayout mode={mode}>
        {authMethod === 'email' ? <EmailFields /> : null}
      </AuthFormLayout>
    </>
  );
};

export default AuthForm;

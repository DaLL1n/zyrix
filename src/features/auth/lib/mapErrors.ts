import type { FieldErrors } from 'react-hook-form';
import type { SignUp } from '../models/schemas';

interface AuthErrorsShape {
  initials: { name?: string; surname?: string };
  email?: string;
  password: { password?: string; confirmPassword?: string };
  terms?: string;
}

const mapAuthErrors = (errors: FieldErrors<SignUp>): AuthErrorsShape => {
  return {
    initials: {
      name: errors.name?.message,
      surname: errors.surname?.message,
    },
    email: errors.email?.message,
    password: {
      password: errors.password?.message,
      confirmPassword: errors.confirmPassword?.message,
    },
    terms: errors.terms?.message,
  };
};
export { mapAuthErrors };

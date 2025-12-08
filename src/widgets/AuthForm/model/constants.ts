export const AUTH_TEXTS = {
  login: {
    submitButtonText: 'Login to your account',
    modePrompt: "Don't have an account?",
    modeAction: 'Sign up',
    authErrorMessage: 'Invalid email or password',
  },
  'sign-up': {
    submitButtonText: 'Sign Up to your account',
    modePrompt: 'Already have an account?',
    modeAction: 'Log in',
    authErrorMessage: 'User with this email address is already registered',
  },
} as const;

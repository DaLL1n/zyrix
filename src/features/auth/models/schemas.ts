import z from 'zod';

export const loginSchema = z.object({
  email: z.email('Please provide a valid email address'),
  password: z
    .string()
    .min(8, 'Please use a password with at least 8 characters')
    .max(16, 'Password cannot exceed 16 characters')
    .regex(/(?=.*[A-Z])/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
});

export type Login = z.infer<typeof loginSchema>;

export const signUpSchema = loginSchema
  .extend({
    name: z.string().min(2, 'Please fill out this field'),
    surname: z.string().min(2, 'Please fill out this field'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
    terms: z.literal(true),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type SignUp = z.infer<typeof signUpSchema>;

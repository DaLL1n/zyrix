import { Input } from '@/shared/ui';

interface EmailFieldsProps {
  isLoading?: boolean;
}

const EmailFields = ({ isLoading = false }: EmailFieldsProps) => {
  return (
    <>
      <Input type="email" placeholder="Email Address" disabled={isLoading} />
      <Input type="password" placeholder="Password" disabled={isLoading} />
    </>
  );
};

export default EmailFields;

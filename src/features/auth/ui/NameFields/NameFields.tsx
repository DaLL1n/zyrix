import { Input } from '@/shared/ui';

interface NameFieldsProps {
  register: any;
  isLoading?: boolean;
  errorMessages: {
    name?: string;
    surname?: string;
  };
}

const NameFields = ({
  register,
  isLoading = false,
  errorMessages,
}: NameFieldsProps) => {
  return (
    <>
      <Input
        placeholder="Name"
        disabled={isLoading}
        errorMessage={errorMessages?.name}
        autoComplete="given-name"
        autoCapitalize="on"
        {...register('name')}
      />
      <Input
        placeholder="Surname"
        disabled={isLoading}
        errorMessage={errorMessages?.surname}
        autoComplete="family-name"
        autoCapitalize="on"
        {...register('surname')}
      />
    </>
  );
};

export default NameFields;

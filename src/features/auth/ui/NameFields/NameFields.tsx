import { Input } from '@/shared/ui';

interface NameFieldsProps {
  register: any;
  isLoading?: boolean;
  errorMessages: {
    name?: string;
    surname?: string;
  };
  watch?: (name: 'name' | 'surname') => any;
}

const NameFields = ({
  register,
  isLoading = false,
  errorMessages,
  watch,
}: NameFieldsProps) => {
  return (
    <>
      <Input
        placeholder="Name"
        disabled={isLoading}
        errorMessage={errorMessages?.name}
        autoComplete="given-name"
        autoCapitalize="on"
        isValid={watch?.('name')?.length > 0}
        {...register('name')}
      />
      <Input
        placeholder="Surname"
        disabled={isLoading}
        errorMessage={errorMessages?.surname}
        autoComplete="family-name"
        autoCapitalize="on"
        isValid={watch?.('surname')?.length > 0}
        {...register('surname')}
      />
    </>
  );
};

export default NameFields;

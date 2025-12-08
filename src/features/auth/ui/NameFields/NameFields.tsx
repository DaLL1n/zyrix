import { Input } from '@/shared/ui';

interface NameFieldsProps {
  register: any;
  isLoading?: boolean;
  errorMessages: {
    name?: string;
    surname?: string;
  };
  fieldState?: (name: 'name' | 'surname') => any;
}

const NameFields = ({
  register,
  isLoading = false,
  errorMessages,
  fieldState,
}: NameFieldsProps) => {
  return (
    <>
      <Input
        placeholder="Name"
        disabled={isLoading}
        errorMessage={errorMessages?.name}
        autoComplete="given-name"
        autoCapitalize="on"
        isValid={fieldState?.('name')}
        {...register('name')}
      />
      <Input
        placeholder="Surname"
        disabled={isLoading}
        errorMessage={errorMessages?.surname}
        autoComplete="family-name"
        autoCapitalize="on"
        isValid={fieldState?.('surname')}
        {...register('surname')}
      />
    </>
  );
};

export default NameFields;

import Icon from '../Icon/Icon';

interface PasswordToggleProps {
  visible: boolean;
  onToggle: () => void;
  className?: string;
}

const PasswordToggle = ({
  visible,
  onToggle,
  className,
}: PasswordToggleProps) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={className}
      aria-label={visible ? 'Hide password' : 'Show password'}
    >
      <Icon iconId={visible ? 'eye' : 'eye-closed'} width={24} height={24} />
    </button>
  );
};

export default PasswordToggle;

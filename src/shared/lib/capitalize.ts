const capitalize = (value?: string) => {
  if (!value) return value ?? '';
  const trimmed = value.trim();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
};

export default capitalize;

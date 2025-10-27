export type BaseInputProps = {
  name?: string;
  loading?: boolean;
  disabled?: boolean;
  label?: string;
  type?: string;
  rules?: string | Record<string, unknown>;
};

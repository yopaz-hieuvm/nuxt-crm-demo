import type { FormContext } from "vee-validate";

export type BaseFormProps<
  T extends Record<string, unknown> | Record<string, unknown>[],
> = {
  form: FormContext<T>;
};

export type BaseFormEmits<
  T extends Record<string, unknown> | Record<string, unknown>[],
> = (e: "submit", value: T) => void;

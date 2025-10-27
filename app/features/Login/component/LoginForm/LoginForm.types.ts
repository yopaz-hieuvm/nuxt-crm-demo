import type { LoginRequest } from "../../types";
export type LoginFormProps = {
  loading?: boolean;
};

export type LoginFormEmits = {
  (e: "submit:login", payload: LoginRequest): void;
};

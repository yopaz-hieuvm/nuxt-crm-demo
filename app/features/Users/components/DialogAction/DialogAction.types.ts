import type { CreatedUserRequest } from "../../types";

export type DialogActionEmits = {
  (e: "submit", request: CreatedUserRequest): void;
};

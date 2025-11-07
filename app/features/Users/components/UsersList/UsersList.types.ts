import type { User } from "../../types";

export type UsersListProps = {
  users?: User[];
  isLoading?: boolean;
};

export type UsersListEmits = {
  (e: "delete:user", id: number): void;
};

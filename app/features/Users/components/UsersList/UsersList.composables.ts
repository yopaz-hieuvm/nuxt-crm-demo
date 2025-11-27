import type { DataTableHeader } from "~/types/dataTableHeader";
import type { User } from "../../types";

export const useUsersList = () => {
  const headers: DataTableHeader<User>[] = [
    {
      title: "Avatar",
      key: "avatar",
      width: "100px",
      align: "center",
    },
    { title: "Name", key: "name" },
    { title: "Role", key: "role" },
    { title: "Email", key: "email" },
    { title: "Action", key: "action" },
  ];
  return {
    headers,
  };
};

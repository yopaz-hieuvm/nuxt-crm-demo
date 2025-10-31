import type { DataTableHeader } from "~/types/dataTableHeader";
import type { User } from "../types";

export const useUsers = () => {
  const { api } = useApi();
  const isLoading = ref(false);
  const users = ref<User[]>([]);

  const getUsers = async () => {
    isLoading.value = true;
    await api<User[]>("users", {
      method: "GET",
    })
      .then((res) => {
        users.value = res;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        isLoading.value = false;
      });
  };

  getUsers();

  const headers: DataTableHeader<User>[] = [
    {
      title: "Avatar",
      key: "avatar",
      width: '100px',
    },
    { title: "Name", key: "name" },
    { title: "Role", key: "role" },
    { title: "Email", key: "email" },
  ];

  return {
    isLoading,
    users,
    headers,
  };
};

import type { DataTableHeader } from "~/types/dataTableHeader";
import type { CreatedUserRequest, User } from "../types";
import type { Breadcrumb } from "~/types/breadcrumb.types";

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

  const createUser = async (request: CreatedUserRequest) => {
    isLoading.value = true;
    await api<VoidFunction>("users", {
      method: "POST",
      body: request,
    })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        isLoading.value = false;
      });
  };

  const deleteUser = async (id: number) => {
    isLoading.value = true;
    await api<VoidFunction>(`users/${id}`, {
      method: "DELETE",
    })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        isLoading.value = false;
      });
  };

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

  const breadcrumbs = ref<Breadcrumb[]>([
    {
      title: "Products",
      disabled: false,
      to: "products",
    },
    {
      title: "Users",
      disabled: true,
    },
  ]);

  return {
    isLoading,
    users,
    headers,
    breadcrumbs,
    createUser,
    deleteUser,
  };
};

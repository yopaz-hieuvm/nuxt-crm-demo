import type { CreatedUserRequest, User } from "../types";
import type { Breadcrumb } from "~/types/breadcrumb.types";

export const useUsers = () => {
  const { api } = useApi();
  const isLoading = ref(false);
  const users = ref<User[]>([]);
  const toast = useToast();
  const isShowDialog = ref(false);

  const getUsers = async () => {
    isLoading.value = true;
    await api<User[]>("users", {
      method: "GET",
    })
      .then((res) => {
        users.value = res;
      })
      .catch((err) => {
        toast.error({ title: err.status, message: err.message });
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
        toast.error({ title: err.status, message: err.message });
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
      .then(getUsers)
      .catch((err) => {
        toast.error({ title: err.status, message: err.message });
      })
      .finally(() => {
        isLoading.value = false;
      });
  };

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
    breadcrumbs,
    createUser,
    deleteUser,
    isShowDialog,
  };
};

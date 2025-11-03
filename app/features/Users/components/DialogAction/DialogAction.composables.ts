import type { CreatedUserRequest } from "../../types";
import * as yup from "yup";

export const useDialogAction = () => {
  const createUserSchema = yup
    .object()
    .shape<Record<keyof CreatedUserRequest, yup.AnySchema>>({
      name: yup.string().required().label("Name"),
      email: yup.string().email().required().label("Email"),
      password: yup.string().required().min(6).label("Password"),
      avatar: yup.string().nullable(),
      role: yup.string(),
    });
  const form = useForm<CreatedUserRequest>({
    validationSchema: createUserSchema,
  });

  const formId = "create-user-form";

  return {
    form,
    formId,
  };
};

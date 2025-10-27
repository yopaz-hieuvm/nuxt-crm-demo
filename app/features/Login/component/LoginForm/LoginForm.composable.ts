import type { LoginRequest } from "../../types";
import * as yup from "yup";

export const useLoginForm = () => {
    const visible = ref(false)
  const loginSchema = yup
    .object()
    .shape<Record<keyof LoginRequest, yup.AnySchema>>({
      email: yup.string().email().required().label("Email"),
      password: yup.string().required().min(6).label("Password"),
    });
  const form = useForm<LoginRequest>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
  });

  const formId = "login-form";

    return {
      visible,
    form,
      formId,
    
  };
};

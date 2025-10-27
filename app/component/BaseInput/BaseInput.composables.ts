import type { ModelRef } from "vue";
import type { BaseInputProps } from "./BaseInput.types";
import { uuid } from "vue-uuid";

export const useBaseInput = (
  props: BaseInputProps,
  modelValue: ModelRef<string | number | null | undefined>,
) => {
  const id = ref<string>();
  const { value, errorMessage } = useField<string | number | null | undefined>(
    props.name || "",
    props.rules,
    {
      label: props.label,
      initialValue: modelValue.value,
      syncVModel: true,
    },
  );

  onMounted(() => {
    id.value = uuid.v4();
  });

  return {
    id,
    value,
    errorMessage,
  };
};

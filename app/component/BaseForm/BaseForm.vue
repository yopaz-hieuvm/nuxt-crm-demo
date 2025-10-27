<script
  setup
  lang="ts"
  generic="T extends Record<string, unknown> | Record<string, unknown>[]"
>
import type { BaseFormProps, BaseFormEmits } from "./BaseForm.types";

defineOptions({ inheritAttrs: false });

defineProps<BaseFormProps<T>>();

defineEmits<BaseFormEmits<T>>();
</script>

<template>
  <form
    v-bind="$attrs"
    @submit.prevent="
      form.handleSubmit.withControlled((e) => $emit('submit', e))($event)
    "
  >
    <slot />
  </form>
</template>

<script setup lang="ts">
import { useBaseInput } from "./BaseInput.composables";
import type { BaseInputProps } from "./BaseInput.types";

const modelValue = defineModel<string | number | null | undefined>();
const props = defineProps<BaseInputProps>();

const { id, value, errorMessage } = useBaseInput(props, modelValue);
</script>
<template>
  <div>
    <v-text-field
      v-bind="$attrs"
      :id="id"
      v-model="value"
      :label="props.label"
      :type="props.type || 'text'"
      :loading="props.loading"
      :disabled="props.disabled"
      :error-messages="errorMessage"
      dense
      variant="outlined"
      density="compact"
    />
  </div>
</template>

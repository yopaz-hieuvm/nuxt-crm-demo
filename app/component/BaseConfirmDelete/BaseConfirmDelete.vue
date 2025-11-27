<script setup lang="ts">
import { ref } from "vue";
import {
  VBtn,
  VDialog,
  VCard,
  VCardText,
  VCardActions,
} from "vuetify/components";

import type {
  BaseConfirmDeleteEmits,
  BaseConfirmDeleteProps,
  BaseConfirmDeleteSlots,
} from "./BaseConfirmDelete.types";

defineOptions({ inheritAttrs: false });

defineEmits<BaseConfirmDeleteEmits>();
withDefaults(defineProps<BaseConfirmDeleteProps>(), {
  variant: "outlined",
  color: "error",
  appendIcon: "mdi-delete-outline",
});

const isShowDialog = ref<boolean>(false);

defineSlots<BaseConfirmDeleteSlots>();
</script>
<template>
  <div>
    <v-btn
      v-bind="$attrs"
      :variant="variant"
      :color="color"
      :prepend-icon="prependIcon"
      :append-icon="appendIcon"
      @click="isShowDialog = true"
    >
      Delete
    </v-btn>

    <v-dialog v-model="isShowDialog" width="800" scrollable>
      <v-card>
        <v-card-text class="px-10 py-4 bg-warning">Xác nhận xóa</v-card-text>

        <v-card-text class="px-10 py-5 mb-10">
          <slot name="message">
            <span class="mdi mdi-alert mr-2 text-warning text-h6" color="orange" />Bạn có chắc chắn muốn
            xóa mục này không?
          </slot>
        </v-card-text>

        <v-card-actions class="justify-space-between px-10 py-5">
          <v-btn
            variant="tonal"
            width="150"
            prepend-icon="mdi-close-thick"
            text="Hủy"
            @click="isShowDialog = false"
          />
          <v-btn
            color="black"
            width="150"
            variant="elevated"
            prepend-icon="mdi-check-bold"
            text="Xác nhận"
            @click="
              () => {
                $emit('delete:confirmed');
                isShowDialog = false;
              }
            "
          />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

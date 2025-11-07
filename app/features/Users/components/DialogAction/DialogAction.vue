<script setup lang="ts">
import BaseForm from "~/component/BaseForm/BaseForm.vue";
import { useDialogAction } from "./DialogAction.composables";
import type { DialogActionEmits } from "./DialogAction.types";
import BaseInput from "~/component/BaseInput/BaseInput.vue";

const isShowDialog = defineModel<boolean>();
defineEmits<DialogActionEmits>();
const { form, formId } = useDialogAction();
</script>
<template>
  <v-dialog v-model="isShowDialog" max-width="800">
    <BaseForm :id="formId" :form @submit="$emit('submit', $event)">
      <v-card rounded="lg">
        <v-card-item class="bg-primary py-2" density="compact">
          <template #title>them nguoi dung</template>
          <template #append
            ><v-btn
              icon="mdi mdi-close"
              variant="text"
              @click="isShowDialog = false"
          /></template>
        </v-card-item>
        <v-card-text>
          <BaseInput name="name" autocomplete="off" />
          <BaseInput
            name="password"
            type="password"
            autocomplete="new-password"
          />
          <BaseInput name="email" />
          <BaseInput name="role" />
          <v-file-upload density="compact" />
        </v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn @click.prevent="isShowDialog = false">Dong</v-btn>
          <v-btn type="submit" :form="formId" variant="flat" color="primary"
            >Tao moi</v-btn
          >
        </v-card-actions>
      </v-card>
    </BaseForm>
  </v-dialog>
</template>

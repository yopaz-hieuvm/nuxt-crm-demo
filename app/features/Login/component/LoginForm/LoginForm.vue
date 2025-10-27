<script setup lang="ts">
import BaseForm from "~/component/BaseForm/BaseForm.vue";
import { useLoginForm } from "./LoginForm.composable";
import type { LoginFormEmits, LoginFormProps } from "./LoginForm.types";
import BaseInput from "~/component/BaseInput/BaseInput.vue";
defineProps<LoginFormProps>();
defineEmits<LoginFormEmits>();
const { visible,form, formId } = useLoginForm();
</script>
<template>
  <div>
    <v-card
      class="mx-auto my-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <v-card-title class="text-xl font-semibold">Đăng nhập</v-card-title>
      <v-card-text>
        <BaseForm :id="formId" :form @submit="$emit('submit:login', $event)">
          <BaseInput
            name="email"
            type="text"
            label="Email"
            :loading
            density="compact"
            placeholder="Email address"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
            class="my-4"
          />
          <BaseInput
            name="password"
            :type="visible ? 'text' : 'password'"
            label="Password"
            :loading
            density="compact"
            placeholder="Enter your password"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            class="my-4"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append-inner="visible = !visible"
          />
          <v-btn
            :form="formId"
            type="submit"
            class="mb-8"
            color="blue"
            size="large"
            variant="tonal"
            block
            >Login</v-btn
          >
        </BaseForm>
      </v-card-text>
    </v-card>
  </div>
</template>

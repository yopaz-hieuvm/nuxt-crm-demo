<script setup lang="ts">
import LoginForm from "~/features/Login/component/LoginForm/LoginForm.vue";
import { useLogin } from "~/features/Login/composables/useLogin.composables";

definePageMeta({
  layout: false,
});

const { login, isLoading } = useLogin();
</script>
<template>
  <div>
    <LoginForm :loading="isLoading" @submit:login="login" />
  </div>
</template>

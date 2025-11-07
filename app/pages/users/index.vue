<script setup lang="ts">
import BasePageHeader from "~/component/BasePageHeader/BasePageHeader.vue";
import DialogAction from "~/features/Users/components/DialogAction/DialogAction.vue";
import { useUsers } from "~/features/Users/composables.ts/useUsers.composables";
import UsersList from "~/features/Users/components/UsersList/UsersList.vue";
const { isLoading, users, breadcrumbs, deleteUser, isShowDialog, createUser } =
  useUsers();
</script>
<template>
  <div>
    <BasePageHeader title="Danh sách người dùng" :breadcrumbs />
    <div class="d-flex justify-end mb-3 mx-3">
      <v-btn
        variant="tonal"
        append-icon="mdi mdi-account-plus"
        color="primary"
        @click.prevent="isShowDialog = true"
        >Thêm người dùng</v-btn
      >
    </div>
    <UsersList :users :is-loading @delete:user="deleteUser" />

    <DialogAction v-model="isShowDialog" @submit="createUser" />
  </div>
</template>

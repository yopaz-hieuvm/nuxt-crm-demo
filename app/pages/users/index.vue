<script setup lang="ts">
import BasePageHeader from "~/component/BasePageHeader/BasePageHeader.vue";
import { useUsers } from "~/features/Users/composables.ts/useUsers.composables";

const { isLoading, users, headers, breadcrumbs, deleteUser } = useUsers();
</script>
<template>
  <div>
    <BasePageHeader title="Danh sách người dùng" :breadcrumbs />
    <v-sheet border rounded="xl">
      <v-data-table
        :headers
        :items="users"
        :loading="isLoading"
        :header-props="{
          class: 'font-weight-bold',
        }"
      >
        <template #[`item.avatar`]="{ value }">
          <div class="pa-2">
            <v-img
              :src="value"
              width="60"
              lazy-src="@/assets/images/noImage/no_image.png"
              class="mx-auto"
            />
          </div>
        </template>
        <template #[`item.action`]="{ item }">
          <v-btn
            variant="outlined"
            class="text-subtitle-2 mr-3"
            color="primary"
            append-icon="mdi mdi-account-edit-outline"
            >Edit</v-btn
          >
          <v-btn
            variant="outlined"
            class="text-subtitle-2"
            color="error"
            append-icon="mdi mdi-delete-outline"
            @click.prevent="deleteUser(item.id)"
            >Delete</v-btn
          >
        </template>
      </v-data-table>
    </v-sheet>
  </div>
</template>

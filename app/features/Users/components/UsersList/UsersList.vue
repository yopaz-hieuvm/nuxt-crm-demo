<script setup lang="ts">
import type { DataTableHeader } from "~/types/dataTableHeader";
import type { UsersListEmits, UsersListProps } from "./UsersList.types";
import type { User } from "../../types";
defineProps<UsersListProps>();
defineEmits<UsersListEmits>();
const headers: DataTableHeader<User>[] = [
  {
    title: "Avatar",
    key: "avatar",
    width: "100px",
    align: "center",
  },
  { title: "Name", key: "name" },
  { title: "Role", key: "role" },
  { title: "Email", key: "email" },
  { title: "Action", key: "action" },
];
</script>
<template>
  <div>
    <v-sheet border rounded="xl">
      <v-data-table
        :headers
        :items="users"
        :loading="isLoading"
        :header-props="{
          class: 'font-weight-bold',
        }"
        show-current-page
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
            @click.prevent="$emit('delete:user', item.id)"
            >Delete</v-btn
          >
        </template>
      </v-data-table>
    </v-sheet>
  </div>
</template>

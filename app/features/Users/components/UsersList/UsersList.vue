<script setup lang="ts">
import type { UsersListEmits, UsersListProps } from "./UsersList.types";

import { useUsersList } from "./UsersList.composables";
import BaseConfirmDelete from "~/component/BaseConfirmDelete/BaseConfirmDelete.vue";
defineProps<UsersListProps>();
defineEmits<UsersListEmits>();
const { headers } = useUsersList();
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
          <div class="d-flex">
          <v-btn
            variant="outlined"
            class="text-subtitle-2 mr-3"
            color="primary"
            append-icon="mdi mdi-account-edit-outline"
            >Edit</v-btn
          >
          <BaseConfirmDelete
            variant="outlined"
            class="text-subtitle-2"
            color="error"
            @delete:confirmed="$emit('delete:user', item.id)"
          /></div>
        </template>
      </v-data-table>
    </v-sheet>
  </div>
</template>

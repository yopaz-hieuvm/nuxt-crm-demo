<script setup lang="ts">
import { useUsers } from "~/features/Users/composables.ts/useUsers.composables";

const { isLoading, users, headers } = useUsers();
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
      </v-data-table>
    </v-sheet>
  </div>
</template>

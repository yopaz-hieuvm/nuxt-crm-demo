<script setup lang="ts">
import type { Menu } from "~/types/sideMenu.types";

defineProps<{ item: Menu }>();
</script>

<template>
  <v-list-subheader
    class="text-black font-weight-bold"
    style="padding-inline-start: 4px !important"
    >{{ item.header }}</v-list-subheader
  >
</template>

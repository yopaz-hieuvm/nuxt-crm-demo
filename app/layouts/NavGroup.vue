<script setup lang="ts">
import type { Menu } from "~/types/sideMenu.types";

defineProps<{ item: Menu }>();
</script>

<template>
  <v-list-subheader color="darkText" class="smallCap">{{
    item.header
  }}</v-list-subheader>
</template>

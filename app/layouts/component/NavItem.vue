<script setup lang="ts">
import type { Menu } from "~/types/sideMenu.types";
import Icon from "./IconSet.vue";

defineProps<{ item: Menu; level: number }>();
</script>

<template>
  <v-list-item
    :to="{ name: item.to }"
    rounded="lg"
    class="mb-1 mr-auto"
    color="#5e35b1"
    :disabled="item.disabled"
    :style="{
      paddingInlineStart: level > 0 ? '15px !important' : '',
      marginLeft: level > 0 ? '30px !important' : '',
    }"
  >
    <template #prepend>
      <Icon :item="item.icon" :level="level" class="d-flex align-center" />
    </template>
    <v-list-item-title class="d-flex align-center text-subtitle-2">{{
      item.title
    }}</v-list-item-title>
    <v-list-item-subtitle v-if="item.subCaption" class="text-caption">
      {{ item.subCaption }}
    </v-list-item-subtitle>
    <template v-if="item.chip" #append>
      <v-chip
        :color="item.chipColor"
        :size="item.chipIcon ? 'small' : 'default'"
        :variant="item.chipVariant"
        :prepend-icon="item.chipIcon"
      >
        {{ item.chip }}
      </v-chip>
    </template>
  </v-list-item>
</template>

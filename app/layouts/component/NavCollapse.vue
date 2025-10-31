<script setup lang="ts">
import NavItem from "./NavItem.vue";
import Icon from "./IconSet.vue";
import type { Menu } from "~/types/sideMenu.types";

defineProps<{ item: Menu; level: number }>();
</script>

<template>
  <v-list-group no-action>
    <template #activator="{ props }">
      <v-list-item
        v-bind="props"
        :value="item.title"
        rounded="lg"
        class="mb-1"
        color="#5e35b1"
      >
        <template #prepend>
          <Icon :item="item.icon" :level="level" class="d-flex align-center" />
        </template>
        <v-list-item-title class="mr-auto text-subtitle-2">{{
          item.title
        }}</v-list-item-title>
        <v-list-item-subtitle
          v-if="item.subCaption"
          class="text-caption mt-n1 hide-menu"
        >
          {{ item.subCaption }}
        </v-list-item-subtitle>
      </v-list-item>
    </template>
    <template v-for="(subitem, i) in item.children" :key="i">
      <NavCollapse v-if="subitem.children" :item="subitem" :level="level + 1" />
      <NavItem v-else :item="subitem" :level="level + 1" />
    </template>
  </v-list-group>
</template>

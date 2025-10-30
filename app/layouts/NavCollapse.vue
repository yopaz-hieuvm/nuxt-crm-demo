<script setup lang="ts">
import NavItem from "./NavItem.vue";
import Icon from "./IconSet.vue";
import type { Menu } from "~/types/sideMenu.types";

defineProps<{ item: Menu; level: number }>();
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!---Item Childern -->
  <!-- ---------------------------------------------- -->
  <v-list-group no-action>
    <!-- ---------------------------------------------- -->
    <!---Dropdown  -->
    <!-- ---------------------------------------------- -->
    <template #activator="{ props }">
      <v-list-item
        v-bind="props"
        :value="item.title"
        rounded
        class="mb-1"
        color="secondary"
      >
        <!---Icon  -->
        <template #prepend>
          <Icon :item="item.icon" :level="level" />
        </template>
        <!---Title  -->
        <v-list-item-title class="mr-auto">{{ item.title }}</v-list-item-title>
        <!---If Caption-->
        <v-list-item-subtitle
          v-if="item.subCaption"
          class="text-caption mt-n1 hide-menu"
        >
          {{ item.subCaption }}
        </v-list-item-subtitle>
      </v-list-item>
    </template>
    <!-- ---------------------------------------------- -->
    <!---Sub Item-->
    <!-- ---------------------------------------------- -->
    <template v-for="(subitem, i) in item.children" :key="i">
      <NavCollapse v-if="subitem.children" :item="subitem" :level="level + 1" />
      <NavItem v-else :item="subitem" :level="level + 1" />
    </template>
  </v-list-group>

  <!-- ---------------------------------------------- -->
  <!---End Item Sub Header -->
  <!-- ---------------------------------------------- -->
</template>

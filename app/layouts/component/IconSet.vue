<script setup lang="ts">
defineProps<{ item?: object; level: number }>();
</script>

<template>
  <div>
    <template v-if="level > 0">
      <component :is="item" size="8" fill="currentColor" class="mr-4" />
    </template>
    <template v-else>
      <component :is="item" size="18" class="mr-4" />
    </template>
  </div>
</template>

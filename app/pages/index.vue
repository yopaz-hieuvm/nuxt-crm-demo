<script setup lang="ts">
import { useProducts } from "~/features/Products/composables/useProducts.composables";

const { isLoading, products } = useProducts();
</script>
<template>
  <div>
    <v-data-table :items="products" :loading="isLoading" />
  </div>
</template>

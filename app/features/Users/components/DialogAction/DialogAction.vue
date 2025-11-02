<script setup lang="ts">
const isShowDialog = defineModel<boolean>();
</script>
<template>
  <v-dialog v-model="isShowDialog" max-width="800">
    <v-card rounded="lg">
      <v-card-item class="bg-primary py-2" density="compact">
        <template #title>them nguoi dung</template>
        <template #append
          ><v-btn
            icon="mdi mdi-close"
            variant="text"
            @click="isShowDialog = false"
        /></template>
      </v-card-item>
      <v-card-text> hioas </v-card-text>
      <v-card-actions class="d-flex justify-end">
        <v-btn @click.prevent="isShowDialog = false">Dong</v-btn>
        <v-btn variant="flat" color="primary">Tao moi</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

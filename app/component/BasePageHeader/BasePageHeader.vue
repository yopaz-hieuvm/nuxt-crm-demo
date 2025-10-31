<script setup lang="ts">
import { ChevronRightIcon } from "vue-tabler-icons";
import type { Breadcrumb } from "~/types/breadcrumb.types";

defineProps<{ title?: string; breadcrumbs?: Breadcrumb[] }>();
</script>
<template>
  <v-row class="page-breadcrumb mb-1 mt-1">
    <v-col cols="12" md="12">
      <v-card variant="flat" class="px-4 py-3" rounded="lg" border>
        <v-row no-gutters class="align-center">
          <v-col md="5">
            <div class="text-h6 font-weight-black">{{ title }}</div>
          </v-col>

          <v-col md="7" sm="12" cols="12">
            <v-breadcrumbs
              :items="breadcrumbs"
              class="text-subtitle-2 font-weight-medium justify-md-end pa-1"
            >
              <template #divider>
                <div class="d-flex align-center">
                  <ChevronRightIcon size="17" />
                </div>
              </template>
              <template #prepend>
                <v-icon
                  size="small"
                  icon="mdi mdi-home"
                  class="text-secondary mr-2"
                />
                <div class="d-flex align-center">
                  <ChevronRightIcon size="17" />
                </div>
              </template>
            </v-breadcrumbs>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

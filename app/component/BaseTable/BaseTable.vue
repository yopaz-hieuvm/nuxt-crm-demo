<script setup lang="ts" generic="T extends Record<BaseTableFieldName, unknown>">
import { computed } from "vue";

import type {
  BaseTableProps,
  BaseTableSlots,
  BaseTableFieldName,
} from "./BaseTable.types";

defineOptions({ inheritAttrs: false });

withDefaults(defineProps<BaseTableProps<T>>(), {
  itemIdKey: "id",
  sortMode: "direct",
});
const slots = defineSlots<BaseTableSlots<T>>();
const hasDefaultSlot = computed<boolean>(() => !!slots.default);
</script>

<template>
  <div>
    <v-table v-bind="$attrs">
      <thead>
        <tr>
          <th
            v-for="column of columns"
            v-bind="column.headerAttrs"
            :key="column.header"
            class="font-weight-bold bg-grey-lighten-2"
            :style="{ width: column.width || 'auto' }"
          >
            {{ column.header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="loading">
          <td
            class="text-center py-10"
            :colspan="columns.length"
            role="loading"
          >
            <slot name="loading">
              <v-skeleton-loader :loading="loading" type="article" />
            </slot>
          </td>
        </tr>
        <tr v-else-if="items.length === 0">
          <slot name="empty">
            <td class="text-center py-10" :colspan="columns.length">
              <p>No Data</p>
            </td>
          </slot>
        </tr>
        <tr
          v-for="(item, index) of items"
          v-else
          :key="String(item[itemIdKey])"
        >
          <td
            v-for="column of columns"
            :key="column.key"
            class="py-2"
            :style="{
              width: column.width || 'auto',
              wordBreak: 'break-word',
              wordWrap: 'break-word',
            }"
            v-bind="column.bodyAttrs"
          >
            <slot
              v-if="column.key === 'transform'"
              name="transform"
              :item="item"
              :index="index"
            >
              <component :is="column.transform?.({ item, index })" />
            </slot>
            <slot
              v-else-if="hasDefaultSlot"
              name="default"
              :item="item"
              :index="index"
            />
            <slot v-else :name="column.key" :item="item" :index="index">
              {{ item[column.key] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<style scoped lang="scss">
.bordered {
  border-left: 1px solid #c3c3c3;
  border-top: 1px solid #c3c3c3;

  th,
  td {
    border-right: 1px solid #c3c3c3;
    border-bottom: 1px solid #c3c3c3;
  }
}
</style>

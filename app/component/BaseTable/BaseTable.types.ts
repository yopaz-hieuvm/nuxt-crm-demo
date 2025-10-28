import type { VNode, ThHTMLAttributes, TdHTMLAttributes } from "vue";

export type BaseTableFieldName = string;

export type BaseTableSlotsScope<T> = { item: Readonly<T>; index: number };

export type BaseTableColumn<T extends Record<BaseTableFieldName, unknown>> =
  | {
      key: keyof T | "actions";
      header: string;
      width?: HTMLElement["style"]["width"];
      headerAttrs?: ThHTMLAttributes;
      bodyAttrs?: TdHTMLAttributes;
      transform?: never;
    }
  | {
      key: "transform";
      header: string;
      width?: HTMLElement["style"]["width"];
      headerAttrs?: ThHTMLAttributes;
      bodyAttrs?: TdHTMLAttributes;
      transform?: (scope: BaseTableSlotsScope<T>) => VNode | null;
    };

export type BaseTableProps<T extends Record<BaseTableFieldName, unknown>> = {
  columns: BaseTableColumn<T>[];
  items: T[];
  itemIdKey?: BaseTableFieldName;
  loading?: boolean;
};

export type BaseTableSlots<T extends Record<BaseTableFieldName, unknown>> = {
  default: (scope: BaseTableSlotsScope<T>) => VNode;
  loading: () => VNode;
  empty: () => VNode;
  actions: (scope: BaseTableSlotsScope<T>) => VNode;
} & {
  [key in keyof T]: (scope: BaseTableSlotsScope<T>) => VNode;
};

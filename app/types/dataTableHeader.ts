export type DataTableHeader<T = unknown> = {
  key: keyof T | string;
  title?: string;
  align?: "start" | "center" | "end";
  sortable?: boolean;
  width?: string | number;
};

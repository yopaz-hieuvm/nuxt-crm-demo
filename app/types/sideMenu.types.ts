export type Menu = {
  header?: string;
  title?: string;
  icon?: object;
  to?: string;
  divider?: boolean;
  chip?: string;
  chipColor?: string;
  chipVariant?: "flat" | "elevated" | "outlined" | "plain" | "text" | "tonal";
  chipIcon?: string;
  children?: Menu[];
  disabled?: boolean;
  subCaption?: string;
};

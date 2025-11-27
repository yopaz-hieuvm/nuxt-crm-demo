import type { VNode } from "vue";

export type BaseConfirmDeleteProps = {
  variant?: "text" | "flat" | "elevated" | "tonal" | "outlined" | "plain";
  color?: string;
  prependIcon?: string;
  appendIcon?: string;
};

export type BaseConfirmDeleteEmits = (e: "delete:confirmed") => void;

export type BaseConfirmDeleteSlots = {
  message: () => VNode;
};

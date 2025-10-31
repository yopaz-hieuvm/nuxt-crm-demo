import {
  CircleIcon,
  AdjustmentsCogIcon,
  Home2Icon,
  UsersIcon,
} from "vue-tabler-icons";
import type { Menu } from "~/types/sideMenu.types";
export const sideMenu: Menu[] = [
  { header: "Dashboard" },
  {
    title: "Default",
    icon: Home2Icon,
    to: "index",
  },
  { divider: true },
  { header: "Manager" },
  {
    title: "List",
    icon: AdjustmentsCogIcon,
    children: [
      {
        title: "Category",
        icon: CircleIcon,
        to: "categories",
      },
      {
        title: "Product",
        icon: CircleIcon,
        to: "products",
      },
      {
        title: "Product",
        icon: CircleIcon,
        to: "products",
      },
    ],
  },
  { divider: true },
  { header: "Account" },
  {
    title: "User",
    subCaption: "abc",
    icon: UsersIcon,
    children: [
      {
        title: "Users",
        icon: CircleIcon,
        to: "users",
        chip: "abc",
      },
    ],
  },
];

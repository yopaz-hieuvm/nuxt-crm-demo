import { CircleIcon, KeyIcon, DashboardIcon } from "vue-tabler-icons";
import type { Menu } from "~/types/sideMenu.types";
export const sidebarItem: Menu[] = [
  { header: "Dashboard" },
  {
    title: "Default",
    icon: DashboardIcon,
    to: "index",
  },
  { divider: true },
  { header: "Manager" },
  {
    title: "List",
    icon: KeyIcon,
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
    ],
  },
];

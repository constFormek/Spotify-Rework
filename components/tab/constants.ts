import { TabType } from "./Tab";

export const DesktopLayoutTabs: TabType[] = [
  {
    label: "My Library",
    href: "/library",
    icon: "library",
  },

  {
    label: "Home",
    href: "/",
    icon: "home",
  },

  {
    label: "Discover",
    href: "/discover",
    icon: "discover",
  },

  {
    label: "Search",
    href: "/search",
    icon: "search",
  },
];

export const MobileLayoutTabs: TabType[] = [
  {
    label: "Home",
    icon: "home",
    href: "/",
  },

  {
    label: "Discover",
    icon: "discover",
    href: "/discover",
  },

  {
    label: "Search",
    icon: "search",
    href: "/search",
  },

  {
    label: "Library",
    icon: "library",
    href: "/library",
  },

  {
    label: "Me",
    icon: "user",
    href: "/me",
  },
];

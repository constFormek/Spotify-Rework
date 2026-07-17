import { ReactNode } from "react";
import { IconName } from "./IconMap";
import Icon from "./Icon";
import Link from "next/link";

type TabType = {
  label: string;
  icon: IconName;
  href: string;
  id: number;
};

export const DesktopLayoutTabs: TabType[] = [
  {
    id: 1,
    label: "My Library",
    href: "/library",
    icon: "library",
  },

  {
    id: 2,
    label: "Home",
    href: "/",
    icon: "home",
  },

  {
    id: 3,
    label: "Discover",
    href: "/discover",
    icon: "discover",
  },

  {
    id: 4,
    label: "Search",
    href: "/search",
    icon: "search",
  },
];

interface DesktopLayoutProps {
  children: ReactNode;
}

const DesktopLayout = ({ children }: DesktopLayoutProps) => {
  return (
    <div className="hidden h-screen md:grid grid-cols-[1fr_4fr] grid-rows-[auto_1fr_auto]   gap-y-1 gap-x-2 px-2 py-1 ">
      <div className="border border-bg-secondary rounded-lg col-span-2 flex items-center gap-2">
        {DesktopLayoutTabs.map((tab) => (
          <Link
            href={tab.href}
            key={tab.id}
            className="flex items-center gap-2 text-fg-secondary pl-3.75"
          >
            <Icon name={tab.icon} size={40} />

            {tab.label}
          </Link>
        ))}
      </div>

      <div className="border border-bg-secondary rounded-lg row-span-2">
        library
      </div>

      <div className="border border-bg-secondary rounded-lg overflow-y-auto">
        {children}
      </div>

      <div className="border border-bg-secondary rounded-lg">playbar</div>
    </div>
  );
};

export default DesktopLayout;

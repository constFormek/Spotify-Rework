import { ReactNode } from "react";
import { IconName } from "./IconMap";
import Icon from "./Icon";
import Link from "next/link";

type TabType = {
  label: string;
  href: string;
  icon: IconName;
};

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

interface DesktopLayoutProps {
  children: ReactNode;
}

const DesktopLayout = ({ children }: DesktopLayoutProps) => {
  const libraryTab = DesktopLayoutTabs.find((t) => t.href === "/library");
  const navbarTabs = DesktopLayoutTabs.filter((t) => t.href !== "/library");

  return (
    <div className="hidden h-screen md:grid grid-cols-[1fr_4fr] grid-rows-[auto_1fr_auto]   gap-y-1 gap-x-2 px-2 py-1 ">
      <div className="border border-bg-secondary rounded-lg col-span-2 grid  items-center gap-2 grid-cols-subgrid">
        {libraryTab && (
          <Link
            href={libraryTab.href}
            className="flex items-center gap-2 text-fg-secondary pl-3.75"
          >
            <Icon name={libraryTab.icon} size={40} />

            {libraryTab.label}
          </Link>
        )}

        <div className="flex items-center gap-2 ">
          {navbarTabs.map((tab) => (
            <Link
              href={tab.href}
              key={tab.href}
              className="flex items-center gap-2 text-fg-secondary pl-3.75"
            >
              <Icon name={tab.icon} size={40} />

              {tab.label}
            </Link>
          ))}
        </div>
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

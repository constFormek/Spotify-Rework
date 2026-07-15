import Link from "next/link";
import { ReactNode } from "react";
import Icon from "./Icon";
import { IconName } from "./IconMap";

type TabType = {
  label: string;
  icon: IconName;
  href: string;
  id: number;
};

const MobileLayoutTabs: TabType[] = [
  {
    id: 1,
    label: "Home",
    icon: "home",
    href: "/",
  },

  {
    id: 2,
    label: "Discover",
    icon: "discover",
    href: "/discover",
  },

  {
    id: 3,
    label: "Search",
    icon: "search",
    href: "/search",
  },

  {
    id: 4,
    label: "Library",
    icon: "library",
    href: "/library",
  },

  {
    id: 5,
    label: "Me",
    icon: "user",
    href: "/me",
  },
];

interface MobileLayoutProps {
  children: ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
  return (
    <div className="flex flex-col h-screen justify-between md:hidden ">
      {children}

      <div className="flex flex-col fixed bottom-0 left-0 right-0 z-100">
        <div className="bg-[#333842] p-3 flex items-center justify-between rounded-[10px] mx-2">
          <div className="flex items-center gap-2 shrink min-w-0">
            <div className="w-10.5 aspect-square rounded-sm bg-gray-950 shrink-0" />

            <div className="flex flex-col  text-sm  text-nowrap overflow-hidden flex-1 mask-r-from-75%">
              <p className="text-fg-primary">
                Get Lucky (feat. Pharrell Williams and Nile Rodgers)
              </p>

              <p className="text-fg-secondary">Daft Punk</p>
            </div>
          </div>

          <div className="flex items-center  shrink-0 text-fg-secondary">
            <button>
              <Icon name="add-to-playlist" size={40} />
            </button>

            <button>
              <Icon name="play-simple" size={40} />
            </button>
          </div>
        </div>
        <div className="flex items-center  justify-between px-2 py-3 bg-linear-to-b/longer from-[#111111]/85 to-[#111111] to-43%">
          {MobileLayoutTabs.map((tab) => (
            <Link
              className="flex flex-col text-fg-secondary  items-center text-xs px-4 py-2 "
              key={tab.id}
              href={tab.href}
            >
              <Icon name={tab.icon} size={40} />
              {tab.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileLayout;

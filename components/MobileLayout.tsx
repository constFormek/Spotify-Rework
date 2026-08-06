import Link from "next/link";
import { ReactNode } from "react";
import Icon from "./Icon";
import { MobileLayoutTabs } from "./tab/constants";
import Tab from "./tab/Tab";

interface MobileLayoutProps {
  children: ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
  return (
    <div className="flex h-screen flex-col justify-between md:hidden">
      {children}

      <div className="fixed right-0 bottom-0 left-0 z-100 flex flex-col">
        <div className="mx-2 flex items-center justify-between rounded-[10px] bg-[#333842] p-3">
          <div className="flex min-w-0 shrink items-center gap-2">
            <div className="aspect-square w-10.5 shrink-0 rounded-sm bg-gray-950" />

            <div className="flex flex-1 flex-col overflow-hidden mask-r-from-75% text-sm text-nowrap">
              <p className="text-fg-primary">
                Get Lucky (feat. Pharrell Williams and Nile Rodgers)
              </p>

              <p className="text-fg-secondary">Daft Punk</p>
            </div>
          </div>

          <div className="text-fg-secondary flex shrink-0 items-center">
            <button>
              <Icon name="add-to-playlist" size={40} />
            </button>

            <button>
              <Icon name="play-simple" size={40} />
            </button>
          </div>
        </div>
        <div className="from-bg-primary/85 to-bg-primary flex items-center justify-between bg-linear-to-b/longer to-43% px-2 py-3">
          {MobileLayoutTabs.map((tab) => (
            <Tab
              variant="column"
              key={tab.href}
              href={tab.href}
              icon={tab.icon}
              label={tab.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileLayout;

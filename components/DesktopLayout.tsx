import { ReactNode } from "react";

import Icon from "./Icon";
import { DesktopLayoutTabs } from "./tab/constants";
import Tab from "./tab/Tab";

interface DesktopLayoutProps {
  children: ReactNode;
}

const DesktopLayout = ({ children }: DesktopLayoutProps) => {
  const libraryTab = DesktopLayoutTabs.find((t) => t.href === "/library");
  const variant = "row";
  const searchTab = DesktopLayoutTabs.find((t) => t.href === "/search");
  const excludedTabPaths = ["/library", "/search"];
  const navbarTabs = DesktopLayoutTabs.filter(
    (t) => !excludedTabPaths.includes(t.href),
  );

  return (
    <div className="hidden h-screen grid-cols-[1fr_4fr] grid-rows-[auto_1fr_auto] gap-x-2 gap-y-1 px-2 py-1 md:grid">
      <div className="border-bg-secondary col-span-2 grid grid-cols-subgrid items-center rounded-lg">
        {libraryTab && (
          <Tab
            variant={variant}
            href={libraryTab.href}
            icon={libraryTab.icon}
            label={libraryTab.label}
          />
        )}

        <div className="flex items-center">
          {navbarTabs.map((tab) => (
            <Tab
              variant={variant}
              key={tab.href}
              href={tab.href}
              icon={tab.icon}
              label={tab.label}
            />
          ))}

          {searchTab && (
            <Tab
              variant={variant}
              href={searchTab.href}
              icon={searchTab.icon}
              label={""}
            >
              <input placeholder="search" />
            </Tab>
          )}
        </div>
      </div>

      <div className="border-bg-secondary row-span-2 rounded-lg border">
        library
      </div>

      <div className="border-bg-secondary overflow-y-auto rounded-lg border">
        {children}
      </div>

      <div className="border-bg-secondary text-fg-secondary flex w-full items-center justify-between rounded-lg border px-4 py-2">
        <div className="flex items-center gap-2">
          <button>
            <Icon name="play" size={32} className="text-bg-main" />
          </button>

          <button>
            <Icon name="prev" size={40} className="" />
          </button>

          <button>
            <Icon name="next" size={40} className="" />
          </button>

          <button>
            <Icon name="shuffle" size={32} className="" />
          </button>

          <button>
            <Icon name="loop" size={32} className="" />
          </button>

          <div className="flex items-center gap-2">
            <p>2:23</p>

            <div className="bg-fg-secondary h-1 w-70 rounded-full"></div>
            <p>2:46</p>
          </div>

          <button>
            <Icon name="volume" size={32} className="" />
          </button>

          <div className="flex items-center gap-2">
            <div className="bg-bg-secondary aspect-square w-12 rounded-sm"></div>

            <div className="flex flex-col text-xs">
              <p className="text-fg-primary text-sm">Get Lucky</p>

              <p>Daft Punk</p>

              <p>Random Access Memories</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 divide-x-2 divide-[#898989]/30">
          <div className="flex items-center gap-2">
            <button>
              <Icon name="like" size={32} className="" />
            </button>

            <button>
              <Icon name="add-to-playlist" size={32} className="" />
            </button>

            <button>
              <Icon name="lyrics" size={32} className="" />
            </button>

            <button>
              <Icon name="device" size={32} className="" />
            </button>

            <button>
              <Icon name="more" size={32} className="" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <div className="aspect-square w-6 rounded-full bg-blue-500"></div>

            <button>
              <Icon name="queue" size={32}></Icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopLayout;

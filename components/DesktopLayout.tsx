import { ReactNode } from "react";

export const DesktopLayoutTabs = [];

interface DesktopLayoutProps {
  children: ReactNode;
}

const DesktopLayout = ({ children }: DesktopLayoutProps) => {
  return (
    <div className="hidden h-screen md:grid grid-cols-[1fr_4fr] grid-rows-[auto_1fr_auto]   gap-y-1 gap-x-2 px-2 py-1 ">
      <div className="bg-bg-secondary col-span-2">tabs</div>

      <div className="bg-bg-secondary row-span-2">library</div>

      <div className="bg-bg-secondary overflow-y-auto">{children}</div>

      <div className="bg-bg-secondary">playbar</div>
    </div>
  );
};

export default DesktopLayout;

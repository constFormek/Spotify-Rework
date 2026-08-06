"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Icon from "../Icon";
import { DynamicIconName } from "../IconMap";

export type TabType = {
  label: string;
  icon: DynamicIconName;
  href: string;
};

interface TabProps extends TabType {
  children?: ReactNode;
  variant: "row" | "column";
}

const Tab = ({ children, label, href, icon, variant }: TabProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const isActiveDesktopTab = variant === "row" && isActive;
  const labelColorClass =
    variant === "row" && isActive ? "text-fg-primary" : "text-fg-secondary";

  const className =
    variant === "row"
      ? "gap-2 pl-3.75 flex px-5 py-3 min-w-60"
      : "flex flex-col px-4 py-2 text-xs text-fg-secondary";
  return (
    <Link
      className={`${className} items-center ${variant === "row" ? (isActive ? "bg-bg-primary rounded-xl" : " ") : " "}`}

      href={href}
    >
      <Icon
        size={30}
        name={icon}
        isActive={isActive}
        className={isActiveDesktopTab ? "text-fg-primary" : "text-fg-secondary"}
      />

      <p className={labelColorClass}>{label}</p>
      {children}
    </Link>
  );
};

export default Tab;

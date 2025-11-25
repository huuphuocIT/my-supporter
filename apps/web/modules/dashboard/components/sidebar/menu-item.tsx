"use client";

import Link from "next/link";

import {
  SidebarMenuItem,
  SidebarMenuButton,
} from "@workspace/ui/components/sidebar";

import { Route } from "./configs";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export type MenuItemProps = {
  route: Route;
};

export const MenuItem = (props: MenuItemProps) => {
  const { route } = props;

  const pathname = usePathname();

  const isActive = useMemo(() => {
    if (!pathname || pathname === "/") {
      return route.href === "/";
    }

    return pathname === route.href;
  }, [pathname, route.href]);

  return (
    <SidebarMenuItem key={route.label}>
      <SidebarMenuButton asChild tooltip={route.label} isActive={isActive}>
        <Link href={route.href}>
          {route.icon && <route.icon className="size-4" />}
          <span>{route.label}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export default MenuItem;

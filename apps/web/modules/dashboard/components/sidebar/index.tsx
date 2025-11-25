"use client";

import { UserButton } from "@clerk/nextjs";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  // SidebarHeader,
  SidebarRail,
} from "@workspace/ui/components/sidebar";

import { ROUTES } from "./configs";
import MenuSection from "./menu-section";
// import Image from "next/image";

export const DashboardSidebar = () => {
  return (
    <Sidebar className="group" collapsible="icon">
      {/* <SidebarHeader>
        <Image src="/images/logo_v2.png" width={70} height={40} alt="logo" />
      </SidebarHeader> */}
      <SidebarContent>
        {ROUTES.map((route) => (
          <SidebarGroup key={route.group}>
            <SidebarGroupLabel>{route.group}</SidebarGroupLabel>
            <MenuSection routes={route.routes} />
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <UserButton
          showName
          appearance={{
            elements: {
              rootBox: "w-full h-8",
              userButtonTrigger:
                "w-full p-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              userButtonBox: "flex-row-reverse",
              userButtonOuterIdentifier:
                "pl-0 group-data-[collapsible=icon]:hidden",
            },
          }}
        />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default DashboardSidebar;

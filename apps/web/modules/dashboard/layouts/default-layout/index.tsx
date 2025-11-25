import { cookies } from "next/headers";
import { PropsWithChildren } from "react";

import {
  SidebarProvider,
  SidebarTrigger,
  SIDEBAR_COOKIE_NAME,
} from "@workspace/ui/components/sidebar";
import { AuthGuard } from "@/modules/auth/components";
import DashboardSidebar from "@/modules/dashboard/components/sidebar";

export const DefaultLayout = async (props: PropsWithChildren) => {
  const { children } = props;
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get(SIDEBAR_COOKIE_NAME)?.value === "true";

  return (
    <AuthGuard>
      <SidebarProvider defaultOpen={defaultOpen}>
        <DashboardSidebar />
        <main className="relative">
          <SidebarTrigger className="absolute left-0.5 top-0.5 hidden md:flex" />
          <div className="flex flex-col flex-1 mt-8">{children}</div>
        </main>
      </SidebarProvider>
    </AuthGuard>
  );
};

export default DefaultLayout;

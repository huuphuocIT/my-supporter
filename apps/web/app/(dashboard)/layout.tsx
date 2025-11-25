import { PropsWithChildren } from "react";

import { DefaultLayout } from "@/modules/dashboard/layouts";

export default function Layout({ children }: Readonly<PropsWithChildren>) {
  return <DefaultLayout>{children}</DefaultLayout>;
}

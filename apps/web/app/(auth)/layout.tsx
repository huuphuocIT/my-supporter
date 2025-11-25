import { PropsWithChildren } from "react";

import { AuthLayout } from "@/modules/auth/layouts";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return <AuthLayout>{children}</AuthLayout>;
}

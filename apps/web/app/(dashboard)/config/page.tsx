import { redirect, RedirectType } from "next/navigation";

export default async function Page() {
  await redirect("/dashboard/config/widget", RedirectType.replace);

  return <></>;
}

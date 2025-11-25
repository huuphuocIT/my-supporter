import { PropsWithChildren } from "react";

export const AuthLayout = ({
  children,
}: Readonly<PropsWithChildren<unknown>>) => {
  return (
    <main className="min-w-screen min-h-screen flex">
      <aside className="flex-1/2 bg-blue-400 min-h-full flex items-center justify-center text-center">
        <h1 className="text-5xl text-[#fff] after:content-['!!!']">
          Hello Nami !!!{" "}
        </h1>
      </aside>
      <div className="flex-1/2 flex justify-center items-center">
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;

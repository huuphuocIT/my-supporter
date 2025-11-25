"use client";

import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { PropsWithChildren } from "react";

import { AuthLayout } from "../../layouts";
import { SignInPage } from "../../view";

export const AuthGuard = ({ children }: PropsWithChildren) => {
  return (
    <>
      <AuthLoading>
        <AuthLayout>
          <p className="flex items-center space-x-1 text-3xl font-mono">
            <span>Loading</span>
            <span className="animate-bounce delay-[0ms]">.</span>
            <span className="animate-bounce delay-[200ms]">.</span>
            <span className="animate-bounce delay-[400ms]">.</span>
          </p>
        </AuthLayout>
      </AuthLoading>
      <Authenticated>{children}</Authenticated>
      <Unauthenticated>
        <AuthLayout>
          <SignInPage />
        </AuthLayout>
      </Unauthenticated>
    </>
  );
};

export default AuthGuard;

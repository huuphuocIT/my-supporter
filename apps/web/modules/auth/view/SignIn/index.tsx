import { SignIn } from "@clerk/nextjs";

export const SignInPage = () => {
  return <SignIn appearance={{ theme: "clerk" }} routing="hash" />;
};

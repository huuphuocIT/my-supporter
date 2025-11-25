import { SignUp } from "@clerk/nextjs";

export const SignUpPage = () => {
  return <SignUp appearance={{ theme: "clerk" }} routing="hash" />;
};

import Logo from "@/components/misc/logo";
import TermsPrivacy from "@/components/misc/terms-x-privacy";
import { Button } from "@/components/ui/button";
import { FancyButton } from "@/components/ui/fancy-button";
import { signin_options } from "@/constants/configurations";
import * as React from "react";
import { useNavigate } from "react-router";

const Signin = () => {
  const navigate = useNavigate();

  // JSX Code ==============
  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden overflow-y-auto bg-main-background">
      <div className="w-full max-w-sm h-fit m-auto shrink-0 flex flex-col items-center justify-center">
        <Logo className="size-12" />
        <h1 className="text-2xl font-semibold text-foreground mt-4">
          Welcome to Orbz
        </h1>
        <p className="text-sm text-center text-muted-foreground">
          Sign-In back to your digital universe. <br />
          Pick an option below to continue.
        </p>

        {/* SignIn Options */}
        <div className="mt-4 w-full grid gap-2">
          {signin_options.map((option) => (
            <FancyButton
              onClick={() => navigate("/")}
              key={option.title}
              variant={"primary"}
              className="w-full h-12 text-sm font-medium"
            >
              <option.icon className="size-4" /> Continue with {option.title}
            </FancyButton>
          ))}
        </div>

        <div className="mt-4 w-full flex items-center gap-2 overflow-hidden">
          <div className="w-1/2 h-1 border-b border-border border-dashed" />
          <span className="text-muted-foreground text-sm shrink-0">
            or create an account
          </span>
          <div className="w-1/2 h-1 border-b border-border border-dashed" />
        </div>

        <Button
          onClick={() => navigate("/signup")}
          variant={"outline"}
          className="mt-4 w-full h-12 text-sm font-medium text-foreground"
        >
          Signup
        </Button>

        {/* Terms */}
        <TermsPrivacy className="mt-6" />
      </div>
    </div>
  );
};

export default React.memo(Signin);

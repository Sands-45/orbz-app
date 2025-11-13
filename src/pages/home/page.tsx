import * as React from "react";
import { FancyButton } from "@/components/ui/fancy-button";
import Logo from "@/components/misc/logo";
import { Navigate } from "react-router";

const Home = () => {
  if (window) {
    return <Navigate to="signin" />;
  }

  // JSX Code ==========
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center">
      <Logo />
      <h1 className="mt-6 text-xl font-bold text-foreground">
        Welcome to Orbz
      </h1>
      <p className="text-sm text-muted-foreground">
        Your all in one place for everything you need.
      </p>
      <FancyButton variant="primary" className="mt-6 w-44">
        Button
      </FancyButton>
    </div>
  );
};

export default React.memo(Home);

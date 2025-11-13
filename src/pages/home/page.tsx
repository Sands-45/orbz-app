import * as React from "react";
import * as Button from "@/components/ui/button";
import Logo from "@/components/misc/logo";

const Home = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center">
      <Logo/>
      <h1 className="mt-6 text-xl font-bold text-foreground">Welcome to Orbz</h1>
      <p className="text-sm text-muted-foreground">
        Your all in one place for everything you need.
      </p>
      <Button.Root variant="primary" className="mt-6 w-44">
        Button
      </Button.Root>
    </div>
  );
};

export default React.memo(Home);

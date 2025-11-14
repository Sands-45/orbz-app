import Logo from "@/components/misc/logo";
import * as React from "react";
import NewOrb from "./new-orb";
import OrbCard from "./orb-card";

const MyOrbz = () => {
  // JSX Code ========
  return (
    <div className="w-full h-fit p-6 pt-24">
      <Logo to="/signin" className="size-12" />
      <h1 className="mt-4 text-3xl font-semibold text-foreground">
        Welcome to Orbz
      </h1>
      <p className="mt-2 text-base text-muted-foreground">
        Your digital universe, where everything connects.
      </p>

      {/* Orbz */}
      <div className="mt-12 w-full flex items-center gap-4">
        <OrbCard />
        <NewOrb />
      </div>
    </div>
  );
};

export default React.memo(MyOrbz);

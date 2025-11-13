import Logo from "@/components/misc/logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, Plus } from "lucide-react";
import * as React from "react";

const MyOrbz = () => {
  // JSX Code ========
  return (
    <div
      className="fixed inset-0 bg-main-background p-6 pt-24 flex justify-center
      overflow-hidden overflow-y-auto"
    >
      <div className="w-full max-w-4xl h-fit shrink-0">
        <Logo className="size-12" />
        <h1 className="mt-12 text-3xl font-semibold text-foreground">
          Welcome to Orbz
        </h1>
        <p className="mt-2 text-base text-muted-foreground">
          Your digital universe, where everything connects
        </p>

        {/* Orbz */}
        <div className="mt-10 w-full flex items-center gap-4 overflow-hidden overflow-x-auto">
          <Card className="p-5 h-64 w-48 gap-0">
            <div
              className="size-10 rounded-full bg-linear-to-br from-orange-600  via-teal-800
              to-earthy-forest-800 shadow-lg border border-earthy-forest-500"
            />
            <h2 className="mt-4 text-xl text-foreground">Default Orb</h2>
            <p className="text-xs text-muted-foreground">
              Get started with our default orbz. Explore, create, and connect.
            </p>
            <Button
              variant="outline"
              size="icon"
              className="size-10 shrink-0 rounded-full bg-background absolute right-5 bottom-5 z-10"
            >
              <ArrowUpRight className="size-5 text-muted-foreground" />
            </Button>
          </Card>
          <Card className="p-5 h-64 w-48 gap-0 border-dashed">
            <div
              className="size-10 rounded-full bg-linear-to-br from-primary via-teal-800
              to-purple-600 shadow-lg border border-earthy-forest-500"
            />
            <h2 className="mt-4 text-xl text-foreground">Create an Orb</h2>
            <p className="text-xs text-muted-foreground">
              Start from a clean slate and customize your way up
            </p>
            <Button
              variant="outline"
              size="icon"
              className="size-10 shrink-0 rounded-full bg-background absolute right-5 bottom-5 z-10"
            >
              <Plus className="size-5 text-muted-foreground" />
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MyOrbz);

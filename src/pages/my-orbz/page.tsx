import Logo from "@/components/misc/logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, Plus } from "lucide-react";
import * as React from "react";
import { motion } from "framer-motion";

const MyOrbz = () => {
  // JSX Code ========
  return (
    <motion.div
      initial={{ x: 30, opacity: 0 }}
      exit={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 ,type:"keyframes"}}
      className="fixed inset-0 bg-main-background p-6 pt-24 flex justify-center
      overflow-hidden overflow-y-auto"
    >
      <div className="w-full max-w-4xl h-fit shrink-0">
        <Logo className="size-12" />
        <h1 className="mt-4 text-3xl font-semibold text-foreground">
          Welcome to Orbz
        </h1>
        <p className="mt-2 text-base text-muted-foreground">
          Your digital universe, where everything connects.
        </p>

        {/* Orbz */}
        <div className="mt-12 w-full flex items-center gap-4 overflow-hidden overflow-x-auto">
          <Card className="p-5 h-56 w-48 gap-3">
            <div className="w-full h-full overflow-hidden">
              <div
                className="size-10 rounded-full bg-linear-to-br from-orange-600  via-teal-800
              to-earthy-forest-800 shadow-lg border border-earthy-forest-500"
              />
              <h2 className="mt-4 text-lg text-foreground">Default Orb</h2>
              <p className="text-xs text-muted-foreground line-clamp-3">
                Get started with our default orb. Explore, create, and connect.
              </p>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="size-10 shrink-0 rounded-full hover:rotate-45 duration-500 transition-all"
            >
              <ArrowUpRight className="size-5 text-muted-foreground" />
            </Button>
          </Card>
          <Card className="p-5 h-56 w-48 border-dashed! gap-3">
            <div className="w-full h-full overflow-hidden">
              <div
                className="size-10 rounded-full bg-linear-to-br from-primary via-teal-800
              to-purple-600 shadow-lg border border-earthy-forest-500"
              />
              <h2 className="mt-4 text-lg text-foreground">Create an Orb</h2>
              <p className="text-xs text-muted-foreground">
                Start from a clean slate and customize your way up
              </p>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="size-10 shrink-0 rounded-full hover:rotate-180 duration-500 transition-all"
            >
              <Plus className="size-5 text-muted-foreground" />
            </Button>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(MyOrbz);

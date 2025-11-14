import Logo from "@/components/misc/logo";
import * as React from "react";
import { motion } from "framer-motion";
import NewOrb from "./new-orb";
import OrbCard from "./orb-card";

const MyOrbz = () => {
  // JSX Code ========
  return (
    <motion.div
      initial={{ x: 30, opacity: 0,filter: 'blur(20px)', }}
      exit={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1,filter: 'blur(0px)', }}
      transition={{ duration: 0.5, type: "keyframes" }}
      className="fixed inset-0 bg-main-background p-6 pt-24 flex justify-center
      overflow-hidden overflow-y-auto"
    >
      <div className="w-full max-w-4xl h-fit shrink-0">
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
    </motion.div>
  );
};

export default React.memo(MyOrbz);

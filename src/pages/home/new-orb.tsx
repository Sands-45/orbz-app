import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import * as React from "react";
import { motion } from "framer-motion";
const MotionCard = motion.create(Card);

const NewOrb = () => {
  // JSX Code =============
  return (
    <MotionCard
      initial={{ opacity: 0, y: 10 }}
      exit={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "keyframes" }}
      className="p-5 h-56 w-48 border-dashed! gap-3"
    >
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
    </MotionCard>
  );
};

export default React.memo(NewOrb);

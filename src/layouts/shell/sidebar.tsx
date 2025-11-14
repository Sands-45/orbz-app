import { Bolt } from "@/components/icons";
import { Button } from "@/components/ui/button";
import * as React from "react";

const Sidebar = () => {
  // JSX Code =============
  return (
    <aside className="w-20 h-full shrink-0 py-6 flex flex-col items-center justify-between overflow-hidden">
      <div className=""></div>
      <div className="grid gap-2">
        <Button
          variant={"outline"}
          size={"icon"}
          className="size-10 rounded-full text-primary dark:text-muted-foreground hover:scale-110
          transition-all duration-500"
        >
          <Bolt className="size-5" />
        </Button>
        <Button
          variant={"outline"}
          size={"icon"}
          className="size-10 rounded-full bg-primary"
        ></Button>
      </div>
    </aside>
  );
};

export default React.memo(Sidebar);

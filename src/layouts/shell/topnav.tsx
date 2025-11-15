import { Inbox } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { formatDateTime } from "@/lib/utils";
import * as React from "react";

const Topnav = () => {
  const currentTime = React.useMemo(() => formatDateTime({ format: "p" }), []);
  // JSX Code =================
  return (
    <nav
      className="w-full h-14 z-10 backdrop-blur-[2px] bg-background/50 borer-b border-border hover:border-primary/50
      transition-all shrink-0 sticky top-0 px-6 flex items-center gap-2 overflow-hidden"
    >
      <Button
        variant={"ghost"}
        className="w-full h-full shadow-none justify-start rounded-none text-muted-foreground/50
        font-medium text-base px-0 hover:bg-transparent shrink"
      >
        What are you looking for?
      </Button>
      <span className="shrink-0 text-sm text-muted-foreground">
        {currentTime}
      </span>
      <Button
        variant={"ghost"}
        size={"icon"}
        className="hover:bg-transparent text-primary dark:text-foreground"
      >
        <Inbox className="size-5" />
      </Button>
    </nav>
  );
};

export default React.memo(Topnav);

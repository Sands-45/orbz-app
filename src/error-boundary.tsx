import * as Button from "@/components/ui/button";
import { ServerCrash } from "lucide-react";

function ErrorBoundary() {
  // Render the children as normal
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col bg-light-bg">
      <div
        className="flex items-center justify-center h-24 w-24 rounded-full bg-zinc-100
         overflow-hidden p-6 shadow-sm border border-border/50"
      >
        <ServerCrash className="h-10 w-10 text-muted-foreground" />
      </div>
      <h1 className="mt-4 font-bold text-foreground">Unknown Error</h1>
      <p className="mt-1 text-xs font-medium text-muted-foreground text-center max-w-[300px] px-4">
        We are sorry, but something went wrong. Please try again.
      </p>
      <Button.Root
        onClick={() => {
          window.location.reload();
        }}
        variant="primary"
        className="mt-2 h-9 w-24 text-white text-xs font-semibold"
      >
        Reload
      </Button.Root>
    </div>
  );
}

export default ErrorBoundary;

import { ServerCrash } from "lucide-react";
import { FancyButton } from "./components/ui/fancy-button";

function ErrorBoundary() {
  // Render the children as normal
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col bg-light-bg">
      <div
        className="flex items-center justify-center size-20 rounded-xl bg-background
         overflow-hidden p-6 shadow-sm border border-border/50"
      >
        <ServerCrash className="h-10 w-10 text-muted-foreground" />
      </div>
      <h1 className="mt-4 text-xl font-bold text-foreground">Unknown Error</h1>
      <p className="mt-1 text-sm font-medium text-muted-foreground text-center max-w-[300px] px-4">
        We are sorry, but something went wrong. Please try again.
      </p>
      <FancyButton
        onClick={() => {
          window.location.reload();
        }}
        variant="primary"
        className="mt-4 w-40"
      >
        Reload
      </FancyButton>
    </div>
  );
}

export default ErrorBoundary;

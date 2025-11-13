import { cn } from "@/lib/utils";
import { Link } from "react-router";

type Props = {
  className?: string;
};

const TermsPrivacy = ({ className }: Props) => {
  
  // JSX Code ========
  return (
    <p
      className={cn(
        "text-xs text-muted-foreground max-w-full px-2 text-center overflow-hidden",
        className,
      )}
    >
      By continuing you are agreeing to our{" "}
      <Link to="" className="underline text-primary">
        Terms of Service
      </Link>{" "}
      and{" "}
      <Link to="" className="underline text-primary">
        Privacy Policy
      </Link>
      .
    </p>
  );
};

export default TermsPrivacy;

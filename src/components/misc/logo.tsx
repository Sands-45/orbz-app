import { cn } from "@/lib/cn";
import * as React from "react";
import { Link } from "react-router";

interface LogoProps {
  className?: string;
  to?: string;
}

const Logo = ({ className, to }: LogoProps) => {
  return (
    <Link to={to || "/"} className="contents">
      <img
        src="/logos/logo.svg"
        alt="Orb"
        className={cn(
          "size-16 rounded-xl shadow-sm bg-white object-cover object-center",
          className,
        )}
      />
    </Link>
  );
};

export default React.memo(Logo);

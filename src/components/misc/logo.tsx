import { cn } from "@/lib/cn";
import * as React from "react";
import { Link } from "react-router";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Link to="" className="contents">
      <img
        src="/logos/logo.svg"
        alt="Orb"
        className={cn(
          "size-16 rounded-xl shadow-sm bg-white border-2 border-white object-cover object-center",
          className,
        )}
      />
    </Link>
  );
};

export default React.memo(Logo);

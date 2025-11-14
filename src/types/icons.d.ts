import { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  name?: string;
  size?: number | string;
  color?: string;
}

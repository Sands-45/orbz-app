import { default_timezone } from "@/constants/system";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { TZDate } from "@date-fns/tz";
import { formatDate } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDateTime = (props?: {
  dt?: string | number | Date;
  timezone?: string;
  format?: string;
}): string => {
  const {
    dt = "",
    timezone = default_timezone,
    format = "dd EEE MMM yyyy - HH:mm ",
  } = props || {};
  const raw = dt ? new Date(dt) : new Date();
  const date = new TZDate(raw, timezone);
  return formatDate(date, format);
};

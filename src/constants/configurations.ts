import { GitHub } from "@/components/apps-logos/github";
import { Google } from "@/components/apps-logos/google";
import { Mail } from "lucide-react";

export const signin_options = [
  { title: "email", icon: Mail, signin: "/signin/email" },
  { title: "google", icon: Google, signin: "/signin/google" },
  { title: "github", icon: GitHub, signin: "/signin/github" },
  // { title: "apple", icon: Apple, signin: "/signin/apple" },
];

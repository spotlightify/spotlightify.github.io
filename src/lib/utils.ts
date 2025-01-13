import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type OS = "Windows" | "macOS" | "Linux" | "Unknown";

export function getOS(): OS {
  if (typeof window === "undefined") return "Unknown";

  const userAgent = window.navigator.userAgent.toLowerCase();

  // Check for mobile devices first
  if (
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      userAgent
    )
  ) {
    return "Unknown";
  }

  if (userAgent.includes("mac")) return "macOS";
  if (userAgent.includes("win")) return "Windows";
  if (userAgent.includes("linux")) return "Linux";
  return "Unknown";
}

export function getOSFromUserAgent(userAgent: string): OS {
  const userAgentLower = userAgent.toLowerCase();

  // Check for mobile devices first
  if (
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      userAgentLower
    )
  ) {
    return "Unknown";
  }

  if (userAgentLower.includes("win")) return "Windows";
  if (userAgentLower.includes("mac")) return "macOS";
  if (userAgentLower.includes("linux")) return "Linux";
  return "Unknown";
}

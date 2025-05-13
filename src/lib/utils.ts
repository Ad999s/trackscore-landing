
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Animation delay utility
export const animationDelay = (delay: number) => {
  return { animationDelay: `${delay}ms` };
}

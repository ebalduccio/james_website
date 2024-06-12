import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function Fontawesome() {
  return library.add(fas);
};


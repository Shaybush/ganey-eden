import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function emptyStringUtilFunction(str: string): boolean {
  if (str === undefined || str === null) return true;

  return false;
}

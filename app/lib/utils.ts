import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function emptyStringImageUtilFunction(image: string): boolean {
    if (image === undefined || image === null) {
        return true;
    }
    return false;
}
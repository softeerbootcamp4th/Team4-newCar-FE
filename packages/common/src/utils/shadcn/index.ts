import { type ClassValue, clsx } from 'clsx';
import twMerge from './twMerge.ts';

export default function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

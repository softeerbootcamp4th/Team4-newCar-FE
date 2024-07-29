import { type ClassValue, clsx } from 'clsx';
import twMerge from 'src/utils/twMerge';

export default function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

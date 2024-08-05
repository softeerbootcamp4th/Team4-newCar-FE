import { useState } from 'react';
import { toast } from 'src/hooks/useToast.ts';

function useStorage<T>(keyName: string, defaultValue: T) {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const value = localStorage.getItem(keyName);
			if (value) {
				return JSON.parse(value);
			}
			localStorage.setItem(keyName, JSON.stringify(defaultValue));
			return defaultValue;
		} catch (err) {
			return defaultValue;
		}
	});

	const setValue = (newValue: T) => {
		try {
			localStorage.setItem(keyName, JSON.stringify(newValue));
		} catch (error) {
			toast({ description: `${error}` });
		}
		setStoredValue(newValue);
	};

	return [storedValue, setValue];
}

export default useStorage;

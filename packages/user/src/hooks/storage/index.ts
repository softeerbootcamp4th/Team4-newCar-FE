import { useState } from 'react';
import { toast } from 'src/hooks/useToast';

const STORAGE_KEY_PREFIX = 'hyundai-softeer-team4-';

function useStorage<T>(keyName: string, defaultValue: T) {
	const prefixedKey = `${STORAGE_KEY_PREFIX}${keyName}`;

	const [storedValue, setStoredValue] = useState(() => {
		try {
			const value = window.localStorage.getItem(prefixedKey);
			if (value) {
				return JSON.parse(value);
			}
			window.localStorage.setItem(prefixedKey, JSON.stringify(defaultValue));
			return defaultValue;
		} catch (err) {
			return defaultValue;
		}
	});

	const setValue = (newValue: T) => {
		try {
			window.localStorage.setItem(prefixedKey, JSON.stringify(newValue));
		} catch (error) {
			toast({ description: `${error}` });
		}
		setStoredValue(newValue);
	};

	return [storedValue, setValue];
}

export default useStorage;

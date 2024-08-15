import { Cookie } from '@softeer/common/utils';
import { useState } from 'react';
import { toast } from 'src/hooks/useToast.ts';

function useStorage<T>(keyName: string, defaultValue: T) {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const cookieValue = Cookie.getCookie<T>(keyName);
			return cookieValue !== null ? cookieValue : defaultValue;
		} catch (err) {
			return defaultValue;
		}
	});

	const setValue = (newValue: T) => {
		try {
			Cookie.setCookie<T>(keyName, newValue);
			setStoredValue(newValue);
		} catch (error) {
			toast({ description: `${keyName} 저장 실패: ${error}` });
		}
	};

	const clearValue = () => {
		try {
			Cookie.clearCookie(keyName);
			setStoredValue(defaultValue);
		} catch (error) {
			toast({ description: `${keyName} 저장 실패: ${error}` });
		}
	};

	return [storedValue, setValue, clearValue];
}

export default useStorage;

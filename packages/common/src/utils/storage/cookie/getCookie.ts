function getCookie<T>(name: string): T | null {
	const cookies = document.cookie.split('; ');
	if (cookies.length === 1 && cookies[0] === '') {
		return null;
	}
	let returnValue: T | null = null;
	cookies.some((cookie) => {
		const [key, value] = cookie.split('=');
		if (key === name) {
			try {
				returnValue = JSON.parse(value);
			} catch (_) {
				returnValue = value as T;
			}
			return true;
		}
		return false;
	});
	return returnValue;
}

export default getCookie;

function getCookie<T>(name: string):T | null {
	const cookies = document.cookie.split('; ');
	if (cookies.length === 1 && cookies[0] === '') {
		return null;
	}
	let returnValue = null;
	cookies.some((cookie) => {
		const [key, value] = cookie.split('=');
		if (key === name) {
			returnValue = value;
			return true;
		}
		return false;
	});
	return returnValue;
}
export default getCookie;

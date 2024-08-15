const DAY = 24 * 60 * 60 * 1000;

function setCookie<T>(key: string, value: T, expirationDays: number = 7):undefined {
	const date = new Date();
	date.setTime(date.getTime() + expirationDays * DAY);
	const		expires = `; expires=${date.toUTCString()}`;
	document.cookie = `${key}=${JSON.stringify(value) || ''}${expires}; path=/`;
}

export default setCookie;

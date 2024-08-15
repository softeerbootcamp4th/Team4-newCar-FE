const DAY = 24 * 60 * 60 * 1000;

function setCookie<T>(name: string, value: T, expirationDays: number = 7): void {
	const date = new Date();
	date.setTime(date.getTime() + expirationDays * DAY);
	const expires = `; expires=${date.toUTCString()}`;
	document.cookie = `${name}=${JSON.stringify(value) || ''}${expires}; path=/`;
}

export default setCookie;

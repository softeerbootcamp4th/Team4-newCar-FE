export default function scrollToElementId(sectionId: string) {
	const element = document.getElementById(sectionId);
	if (element) {
		element.scrollIntoView({ behavior: 'smooth', inline: 'center' });
		window.history.replaceState({}, '', null);
	}
}

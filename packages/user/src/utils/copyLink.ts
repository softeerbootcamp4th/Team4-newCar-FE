import { toast } from 'src/hooks/useToast.ts';

export default async function copyLink(url: string) {
	try {
		await copyToClipboard(url);
		toast({ description: '복사 완료 ✅ 지금 바로 친구에게 공유해요 🔗' });
	} catch (error) {
		toast({
			description: `복사가 정상적으로 이루어지지 않았습니다. 관리자에게 문의 바랍니다.\n${error}`,
		});
	}
}

function copyToClipboard(text: string) {
	if (navigator.clipboard) {
		/** HTTPS 환경에서만 작동 */
		return navigator.clipboard.writeText(text);
	}
	const textarea = document.createElement('textarea');
	textarea.value = text;
	textarea.style.position = 'fixed';
	document.body.appendChild(textarea);
	textarea.focus();
	textarea.select();
	document.execCommand('copy');
	document.body.removeChild(textarea);

	return Promise.resolve();
}

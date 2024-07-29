import OutlinedButton from 'src/components/common/OutlinedButton';
import LinkShareButton from 'src/components/popup/test/linkShare/LinkShareButton';
import LinkDisplay from 'src/components/shared/LinkDisplay';
import { Category } from 'src/types/user';

// TODO: 추후 이벤트 도메인으로 변경
const DOMAIN = 'https://hyundai.com';

interface LinkShareProps {
	category?: Category | null;
	url?: string;
}
export default function LinkShare({ url = DOMAIN, category }: LinkShareProps) {
	const variants = category ?? 'default';

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

	const handleCopy = async () => {
		try {
			await copyToClipboard(url);
		} catch (error) {
			// TODO: custom error toast로 변경
			alert(`복사가 정상적으로 이루어지지 않았습니다. 관리자에게 문의 바랍니다.\n${error}`);
		}
	};

	return (
		<div className="flex gap-3">
			<LinkDisplay variants={variants} value={url} />
			{category ? (
				<LinkShareButton onClick={handleCopy} variants={category} />
			) : (
				<OutlinedButton onClick={handleCopy}>URL 복사</OutlinedButton>
			)}
		</div>
	);
}

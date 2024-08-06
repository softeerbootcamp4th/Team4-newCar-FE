import type { Category } from '@softeer/common/types';
import OutlinedButton from 'src/components/common/OutlinedButton.tsx';
import LinkDisplay from 'src/components/shared/LinkDisplay.tsx';
import LinkShareButton from 'src/components/shared/linkShare/LinkShareButton.tsx';
import useAuth from 'src/hooks/useAuth.tsx';
import { toast } from 'src/hooks/useToast.ts';

// TODO: 추후 이벤트 도메인으로 변경
const DOMAIN = 'https://hyundai.com';

interface LinkShareProps {
	category?: Category | null;
}
export default function LinkShare({ category }: LinkShareProps) {
	const variants = category ?? 'default';
	const { user } = useAuth();

	const url = user ? user.shareUrl : DOMAIN;

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
			toast({
				description: '복사 완료 ✅ 지금 바로 친구에게 공유해요 🔗',
			});
		} catch (error) {
			toast({
				description: `복사가 정상적으로 이루어지지 않았습니다. 관리자에게 문의 바랍니다.\n${error}`,
			});
		}
	};

	return (
		<div className="flex gap-3">
			<LinkDisplay variants={variants} value={url} />
			{/* Todo: 유형 검사 완료해야 가산점 받을 수 있다는 안내 tooltip 추가 */}
			{category ? (
				<LinkShareButton onClick={handleCopy} variants={category} />
			) : (
				<OutlinedButton onClick={handleCopy}>URL 복사</OutlinedButton>
			)}
		</div>
	);
}

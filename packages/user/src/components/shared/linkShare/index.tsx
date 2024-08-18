import type { Category } from '@softeer/common/types';
import OutlinedButton from 'src/components/common/OutlinedButton.tsx';
import LinkDisplay from 'src/components/shared/LinkDisplay.tsx';
import LinkShareButton from 'src/components/shared/linkShare/LinkShareButton.tsx';
import useAuth from 'src/hooks/useAuth.ts';
import copyLink from 'src/utils/copyLink.ts';
import getSharedLink from 'src/utils/getSharedLink.ts';

interface LinkShareProps {
	category?: Category | null;
}
export default function LinkShare({ category }: LinkShareProps) {
	const { user } = useAuth();

	const url = getSharedLink({ type: user?.type, encryptedUserId: user?.encryptedUserId });

	const variants = category ?? 'default';

	const handleCopy = () => copyLink(url);

	return (
		<div className="flex gap-4">
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

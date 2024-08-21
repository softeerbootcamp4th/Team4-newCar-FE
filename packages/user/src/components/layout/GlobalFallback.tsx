import DeferredWrapper from 'src/components/common/DeferredWrapper.tsx';
import PendingContainer from 'src/components/common/PendingContainer.tsx';

export default function GlobalFallback() {
	return (
		<DeferredWrapper>
			<PendingContainer message="이벤트 정보를 불러오는 중입니다!" />
		</DeferredWrapper>
	);
}

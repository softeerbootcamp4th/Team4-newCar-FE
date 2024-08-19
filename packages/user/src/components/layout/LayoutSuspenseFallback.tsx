import PendingContainer from 'src/components/common/PendingContainer.tsx';

export default function LayoutSuspenseFallback() {
	return <PendingContainer message="이벤트 정보를 불러오는 중입니다!" />;
}

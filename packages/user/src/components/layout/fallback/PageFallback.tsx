import PendingContainer from 'src/components/common/PendingContainer.tsx';

export default function PageFallback() {
	return (
		<div className="-mt-[115px] snap-start">
			<PendingContainer message="페이지를 불러오는 중입니다!" />
		</div>
	);
}

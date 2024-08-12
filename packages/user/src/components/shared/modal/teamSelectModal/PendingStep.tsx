import UnassignedCard from 'src/components/event/racing/dashboard/card/UnassignedCard.tsx';

export default function PendingStep() {
	return (
		<div className="flex h-full w-full flex-col items-center justify-center gap-10">
			<UnassignedCard />
			<p className="text-heading-12 font-medium">내 유형 불러오는 중 ...</p>
		</div>
	);
}

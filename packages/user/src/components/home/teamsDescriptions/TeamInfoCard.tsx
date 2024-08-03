import TeamCard from 'src/components/shared/teamCard';
import type { Category } from 'src/types/category';

interface TeamInfoCardProps {
	type: Category;
}

export default function TeamInfoCard({ type }: TeamInfoCardProps) {
	return (
		<TeamCard type={type}>
			<div className="text-detail-2 bg-background text-foreground flex h-[33px] items-center justify-center rounded-[21px] px-12 font-normal">
				확인하기
			</div>
		</TeamCard>
	);
}

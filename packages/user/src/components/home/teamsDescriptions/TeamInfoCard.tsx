import type { Category } from '@softeer/common/types';
import TeamCardTemplate from 'src/components/shared/teamCardTemplate/index.tsx';

interface TeamInfoCardProps {
	type: Category;
}

export default function TeamInfoCard({ type }: TeamInfoCardProps) {
	return (
		<TeamCardTemplate type={type} size="description">
			<div className="text-detail-2 bg-background text-foreground flex h-[33px] items-center justify-center rounded-[21px] px-12 font-normal">
				확인하기
			</div>
		</TeamCardTemplate>
	);
}

import Button from 'src/components/common/Button';
import TeamCard from 'src/components/shared/teamCard';
import type { Category } from 'src/types/category';
import TeamDescriptionModal from './teamDescriptionModal';

interface TeamInfoCardProps {
	type: Category;
}

export default function TeamInfoCard({ type }: TeamInfoCardProps) {
	return (
		<TeamCard type={type}>
			<TeamDescriptionModal
				type={type}
				openTrigger={
					<Button size="sm" variants="black">
						확인하기
					</Button>
				}
			/>
		</TeamCard>
	);
}

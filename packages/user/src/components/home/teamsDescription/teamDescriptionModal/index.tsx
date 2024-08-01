import Modal, { ModalProps } from 'src/components/common/Modal';
import { TEAM_DESCRIPTIONS } from 'src/constants/team';
import type { Category } from 'src/types/category';

interface TeamDescriptionModalProps extends ModalProps {
	type: Category;
}

export default function TeamDescriptionModal({ type, openTrigger }: TeamDescriptionModalProps) {
	const { label, details } = TEAM_DESCRIPTIONS[type];
	return (
		<Modal openTrigger={openTrigger}>
			<h6 className="text-heading-11 font-medium">{details}</h6>
			<h3>{label}</h3>
		</Modal>
	);
}

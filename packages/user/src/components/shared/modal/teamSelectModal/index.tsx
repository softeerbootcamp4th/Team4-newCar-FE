import { Category } from '@softeer/common/types';
import { Suspense, useState } from 'react';
import Modal, { ModalProps } from 'src/components/common/Modal.tsx';
import TriggerButtonWrapper from 'src/components/common/TriggerButtonWrapper.tsx';
import UnassignedCard from 'src/components/event/racing/dashboard/card/UnassignedCard.tsx';
import PendingStep from 'src/components/shared/modal/PendingStep.tsx';
import ShareCountTeamCard from 'src/components/shared/ShareCountTeamCard.tsx';
import TeamSelectModalContent from './ModalContent.tsx';

export interface TeamSelectModalProps extends Omit<ModalProps, 'children' | 'openTrigger'> {
	type?: Category | null | undefined;
}

export default function TeamSelectModal({ type, ...props }: TeamSelectModalProps) {
	const [userType, setUserType] = useState(type);

	const handleClose = () => {
		setUserType(type);
		props.onClose?.();
	};

	return (
		<Modal
			variants={userType ?? 'default'}
			onClose={handleClose}
			openTrigger={
				<TriggerButtonWrapper>
					{type ? <ShareCountTeamCard type={type} size="racing" /> : <UnassignedCard />}
				</TriggerButtonWrapper>
			}
			{...props}
		>
			<Suspense fallback={<PendingStep>유형 검사 리스트 불러오는 중 ...</PendingStep>}>
				{userType ? (
					<TeamSelectModalContent userType={userType} initialStep="already-done" />
				) : (
					<TeamSelectModalContent initialStep="quiz" />
				)}
			</Suspense>
		</Modal>
	);
}

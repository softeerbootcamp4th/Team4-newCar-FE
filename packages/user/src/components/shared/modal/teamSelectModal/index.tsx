import { Suspense } from 'react';
import Modal, { ModalProps } from 'src/components/common/Modal.tsx';
import PendingStep from 'src/components/shared/modal/PendingStep.tsx';
import useAuth from 'src/hooks/useAuth.tsx';
import TeamSelectModalContent from './ModalContent.tsx';

export interface TeamSelectModalProps extends Omit<ModalProps, 'children'> {}

export default function TeamSelectModal({ openTrigger, ...props }: TeamSelectModalProps) {
	const { user } = useAuth();

	return (
		<Modal variants={user?.type} openTrigger={openTrigger} {...props}>
			<Suspense fallback={<PendingStep>유형 검사 리스트 불러오는 중 ...</PendingStep>}>
				<TeamSelectModalContent />
			</Suspense>
		</Modal>
	);
}

import { Suspense } from 'react';
import DeferredWrapper from 'src/components/common/DeferredWrapper.tsx';
import Modal, { ModalProps } from 'src/components/common/Modal.tsx';
import PendingStatus from 'src/components/shared/modal/teamSelectModal/PendingStatus.tsx';
import useAuth from 'src/hooks/useAuth.tsx';
import TeamSelectModalContent from './ModalContent.tsx';

interface TeamSelectModalProps extends Omit<ModalProps, 'children'> {}

export default function TeamSelectModal({ openTrigger, ...props }: TeamSelectModalProps) {
	const { user } = useAuth();

	// if (!user) return <LoginModal openTrigger={openTrigger} />;

	return (
		<Modal variants={user?.type} openTrigger={openTrigger} {...props}>
			<Suspense
				fallback={
					<DeferredWrapper ms={100}>
						<PendingStatus>유형 검사 리스트 불러오는 중 ...</PendingStatus>
					</DeferredWrapper>
				}
			>
				<TeamSelectModalContent />
			</Suspense>
		</Modal>
	);
}

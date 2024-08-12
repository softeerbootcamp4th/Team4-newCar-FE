import { Suspense } from 'react';
import Modal, { ModalProps } from 'src/components/common/Modal.tsx';
import LoginModal from 'src/components/shared/modal/login/index.tsx';
import useAuth from 'src/hooks/useAuth.tsx';
import TeamSelectModalContent from './ModalContent.tsx';

interface TeamSelectModalProps extends Omit<ModalProps, 'children'> {}

export default function TeamSelectModal({ openTrigger }: TeamSelectModalProps) {
	const { user } = useAuth();

	if (!user) return <LoginModal openTrigger={openTrigger} />;

	return (
		<Modal openTrigger={openTrigger}>
			<Suspense>
				<TeamSelectModalContent />
			</Suspense>
		</Modal>
	);
}

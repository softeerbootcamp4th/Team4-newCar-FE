import { Suspense } from 'react';
import Modal, { ModalProps } from 'src/components/common/Modal.tsx';
import useAuth from 'src/hooks/useAuth.tsx';
import TeamSelectModalContent from './ModalContent.tsx';

interface TeamSelectModalProps extends Omit<ModalProps, 'children'> {}

export default function TeamSelectModal({ openTrigger, ...props }: TeamSelectModalProps) {
	const { user } = useAuth();

	// if (user) return <LoginModal openTrigger={openTrigger} />;

	return (
		<Modal variants={user?.type} openTrigger={openTrigger} {...props}>
			<Suspense fallback="불러오는 중 ...">
				<TeamSelectModalContent />
			</Suspense>
		</Modal>
	);
}

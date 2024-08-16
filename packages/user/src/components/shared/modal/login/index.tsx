import Modal, { ModalProps } from 'src/components/common/Modal.tsx';
import LoginStep from './LoginStep.tsx';

interface LoginModalProps extends Omit<ModalProps, 'children'> {}

export default function LoginModal({ openTrigger, ...props }: LoginModalProps) {
	return (
		<Modal openTrigger={openTrigger} {...props}>
			<LoginStep />
		</Modal>
	);
}

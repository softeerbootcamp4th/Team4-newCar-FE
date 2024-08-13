import Modal, { ModalProps } from 'src/components/common/Modal.tsx';

interface LoginModalProps extends Omit<ModalProps, 'children'> {}

export default function LoginModal({ openTrigger }: LoginModalProps) {
	return <Modal openTrigger={openTrigger}>로그인 모달</Modal>;
}

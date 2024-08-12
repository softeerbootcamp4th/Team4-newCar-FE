import Modal, { ModalProps } from 'src/components/common/Modal.tsx';

interface TeamSelectModalProps extends ModalProps {}

export default function TeamSelectModal({ openTrigger }: TeamSelectModalProps) {
	return <Modal openTrigger={openTrigger}>유형 검사</Modal>;
}

import Modal, { ModalProps } from 'src/components/common/Modal.tsx';
import useFunnel from 'src/hooks/useFunnel.ts';
import LoginStep from './LoginStep.tsx';
import SuccessStep from './SuccessStep.tsx';

interface LoginModalProps extends Omit<ModalProps, 'children'> {}

export default function LoginModal({ openTrigger, ...props }: LoginModalProps) {
	const [Funnel, setStep] = useFunnel(['login', 'success', 'error'] as NonEmptyArray<string>, {
		initialStep: 'login',
	});

	return (
		<Modal openTrigger={openTrigger} {...props}>
			<Funnel>
				<Funnel.Step name="login">
					<LoginStep onSuccess={() => setStep('success')} />
				</Funnel.Step>
				<Funnel.Step name="success"><SuccessStep /></Funnel.Step>
			</Funnel>
		</Modal>
	);
}

import Modal, { ModalProps } from 'src/components/common/Modal.tsx';
import useFunnel from 'src/hooks/useFunnel.ts';
import LoginStep from './LoginStep.tsx';

interface LoginModalProps extends Omit<ModalProps, 'children'> {}

export default function LoginModal({ openTrigger, ...props }: LoginModalProps) {
	const [Funnel, setStep] = useFunnel(['login', 'success', 'error'] as NonEmptyArray<string>, {
		initialStep: 'login',
	});

	return (
		<Modal openTrigger={openTrigger} {...props}>
			<Funnel>
				<Funnel.Step name="login">
					<LoginStep onMoveSuccessStep={() => setStep('success')} />
				</Funnel.Step>
				<Funnel.Step name="success">로그인 성공</Funnel.Step>
			</Funnel>
		</Modal>
	);
}

import Modal, { ModalProps } from 'src/components/common/Modal.tsx';
import useFunnel from 'src/hooks/useFunnel.ts';

export default function FCFSModal(props: ModalProps) {
	const [Funnel, setStep] = useFunnel([
		'not-started',
		'ongoing',
		'end',
		'already-done',
	] as NonEmptyArray<string>);

	return (
		<Modal {...props}>
			<Funnel>
				<Funnel.Step name="not-started">not-started</Funnel.Step>
				<Funnel.Step name="ongoing">ongoing</Funnel.Step>
				<Funnel.Step name="end">end</Funnel.Step>
				<Funnel.Step name="already-done">already-done</Funnel.Step>
			</Funnel>
		</Modal>
	);
}

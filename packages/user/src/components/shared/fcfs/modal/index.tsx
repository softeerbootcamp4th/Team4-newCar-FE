import Modal, { ModalProps } from 'src/components/common/Modal.tsx';
import QuizStep from 'src/components/shared/fcfs/modal/QuizStep.tsx';
import useGetFCFSQuiz from 'src/hooks/query/useGetFCFSQuiz.ts';
import useFunnel from 'src/hooks/useFunnel.ts';

export default function FCFSModal(props: ModalProps) {
	const [Funnel] = useFunnel(
		['not-started', 'ongoing', 'end', 'already-done'] as NonEmptyArray<string>,
		{ initialStep: 'ongoing' },
	);

	const { quiz } = useGetFCFSQuiz();

	return (
		<Modal {...props}>
			<div className="flex h-full w-full items-center justify-center p-[100px]">
				<Funnel>
					<Funnel.Step name="not-started">not-started</Funnel.Step>
					<Funnel.Step name="ongoing">
						<QuizStep quiz={quiz} />
					</Funnel.Step>
					<Funnel.Step name="end">end</Funnel.Step>
					<Funnel.Step name="already-done">already-done</Funnel.Step>
				</Funnel>
			</div>
		</Modal>
	);
}

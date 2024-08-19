import { useLayoutEffect } from 'react';
import RaceEventEditor from 'src/components/editor/RaceEventEditor.tsx';
import { Button } from 'src/components/ui/button.tsx';
import categoryList from 'src/constants/categoryList.ts';
import useEvent from 'src/hooks/useEvent.tsx';
import { PersonalityTest } from 'src/services/api/types/apiType.ts';
import { useModal } from 'src/store/provider/ModalProvider.tsx';

function RaceEventBox({
	personalityTest,
	quizIndex,
}: {
	personalityTest: PersonalityTest;
	quizIndex: number;
}) {
	const { openModal } = useModal();

	const handleFix = () => {
		openModal(<RaceEventEditor personalityTest={personalityTest} />);
	};

	return (
		<div>
			<div className="flex flex-col gap-8 bg-[#EFEFEF] p-4 rounded-3">
				<div className="font-bold">Q.{quizIndex+1} {personalityTest.question}</div>
				{personalityTest.choices.map((choice, choiceIndex) => (
					<div className='border-2 border-khaki-600 p-4 rounded-3' >
						<div>
							<span className="mr-1 font-bold">{String.fromCharCode(65 + choiceIndex)}</span>
							{choice.text}
						</div>

						<div className="flex gap-4">
							{choice.scores.map((score) => (
								<div className="flex items-center gap-1">
									<span className="rounded-sm bg-black p-1 p-2 text-white">
										{categoryList.find((category) => score.type === category.EN)?.KR}
									</span>
									<span className="rounded-sm bg-gray-400 p-1 p-2 text-white">{score.value}</span>
								</div>
							))}
						</div>
					</div>
				))}
				<div className="flex justify-end">
					<Button onClick={handleFix}>수정</Button>
				</div>
			</div>
		</div>
	);
}
function RaceEventTab() {
	const { personalityTestList, refetchPersonalityTestList } = useEvent();
	useLayoutEffect(() => {
		refetchPersonalityTestList();
	}, []);
	return (
		<div className="flex flex-col gap-8">
			{personalityTestList?.map((personalityTest, quizIndex) => (
				<RaceEventBox personalityTest={personalityTest} quizIndex={quizIndex} />
			))}
		</div>
	);
}
export default RaceEventTab;

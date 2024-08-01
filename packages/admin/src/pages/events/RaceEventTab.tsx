import RaceEventEditor from 'src/components/editor/RaceEventEditor';
import { Button } from 'src/components/ui/button';
import useEvent from 'src/hooks/useEvent';
import { PersonalityTest } from 'src/services/api/types/apiType';
import { useModal } from 'src/store/provider/ModalProvider';

const categoryList = [
	{
		KR: '펫 프랜들리',
		EN: 'pet',
	},
	{
		KR: '여행의 정석',
		EN: 'travel',
	},
	{
		KR: '공간활용의 기술',
		EN: 'space',
	},
	{
		KR: '레저의 정석',
		EN: 'leisure',
	},
];

function RaceEventBox({
	personalityTest,
	quizIndex,
}: {
	personalityTest: PersonalityTest;
	quizIndex: number;
}) {
	const { openModal } = useModal();
	// server response가 choice1_pet_score choice2_pet_score 같이 칼럼으로 모두 줘서 key값의 이더레이터 필요
	const answers = [personalityTest.choice1, personalityTest.choice2];

	const scoreKeys: [(keyof PersonalityTest)[], (keyof PersonalityTest)[]] = [
		Object.keys(personalityTest).filter((key): key is keyof PersonalityTest =>
			key.includes('choice1_'),
		),
		Object.keys(personalityTest).filter((key): key is keyof PersonalityTest =>
			key.includes('choice1_'),
		),
	];

	const handleFix = () => {
		openModal(<RaceEventEditor personalityTest={personalityTest} />);
	};

	return (
		<div>
			<div>{quizIndex + 1}</div>
			<div className="flex flex-col gap-8 bg-[#EFEFEF] p-4">
				<div className="font-bold">Q. {personalityTest.question}</div>
				{answers.map((answer, answerIndex) => (
					<div>
						<div>
							<span className="mr-1 font-bold">{String.fromCharCode(65 + answerIndex)}</span>
							{answer}
						</div>

						<div className="flex gap-4">
							{scoreKeys[answerIndex].map((categoryKey) => (
								<div className="flex items-center gap-1">
									<span className="rounded-sm bg-black p-1 p-2 text-white">
										{categoryList.find((category) => categoryKey.includes(category.EN))?.KR}
									</span>
									<span className="rounded-sm bg-gray-400 p-1 p-2 text-white">
										{personalityTest[categoryKey]}
									</span>
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
	const { personalityTestList } = useEvent();

	return (
		<div className="flex flex-col gap-8">
			{personalityTestList?.map((personalityTest, quizIndex) => (
				<RaceEventBox personalityTest={personalityTest} quizIndex={quizIndex} />
			))}
		</div>
	);
}
export default RaceEventTab;

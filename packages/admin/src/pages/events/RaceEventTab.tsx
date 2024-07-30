import RaceEventEditor from 'src/components/editor/RaceEventEditor';
import { Button } from 'src/components/ui/button';
import { useModal } from 'src/store/provider/ModalProvider';

interface Weight {
	name: string;
	value: number;
}

interface Answer {
	title: string;
	weights: Weight[];
}

interface Quiz {
	title: string;
	answer: Answer[];
}

function RaceEventBox({ quiz, quizIndex }: { quiz: Quiz; quizIndex: number }) {
	const { openModal } = useModal();

	const handleFix = () => {
		openModal(<RaceEventEditor />);
	};

	return (
		<div>
			<div>{quizIndex + 1}</div>
			{/* map 사용시 key값은 서버에서 주는 primary key로 추가 */}
			<div className="flex flex-col gap-8 bg-[#EFEFEF] p-4">
				<div className="font-bold">Q. {quiz.title}</div>
				{quiz.answer.map((answer, answerIndex) => (
					<div>
						<div>
							<span className="mr-1 font-bold">{String.fromCharCode(65 + answerIndex)}</span>
							{answer.title}
						</div>

						<div className="flex gap-4">
							{answer.weights.map((weight) => (
								<div className="flex items-center gap-2">
									<span className="rounded-sm bg-black p-1 text-white"> {weight.name} </span>
									<span>{weight.value}</span>
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
	const quizList: Quiz[] = [
		{
			title: '오늘은 나들이 가는 날! 나의 드라이브 스타일은?',
			answer: [
				{
					title: '반려동물과 함께하는 드라이브',
					weights: [
						{
							name: '펫',
							value: 7,
						},
						{
							name: '여행',
							value: 0,
						},
						{
							name: '공간',
							value: 0,
						},
						{
							name: '레저',
							value: 0,
						},
					],
				},
				{
					title: '반려동물과 함께하는 드라이브1',
					weights: [
						{
							name: '펫',
							value: 7,
						},
						{
							name: '여행',
							value: 0,
						},
						{
							name: '공간',
							value: 0,
						},
						{
							name: '레저',
							value: 0,
						},
					],
				},
			],
		},
		{
			title: '오늘은 나들이 가는 날! 나의 드라이브 스타일은?1',
			answer: [
				{
					title: '반려동물과 함께하는 드라이브',
					weights: [
						{
							name: '펫',
							value: 7,
						},
						{
							name: '여행',
							value: 0,
						},
						{
							name: '공간',
							value: 0,
						},
						{
							name: '레저',
							value: 0,
						},
					],
				},
				{
					title: '반려동물과 함께하는 드라이브2',
					weights: [
						{
							name: '펫',
							value: 7,
						},
						{
							name: '여행',
							value: 0,
						},
						{
							name: '공간',
							value: 0,
						},
						{
							name: '레저',
							value: 0,
						},
					],
				},
			],
		},
		{
			title: '오늘은 나들이 가는 날! 나의 드라이브 스타일은?3',
			answer: [
				{
					title: '반려동물과 함께하는 드라이브',
					weights: [
						{
							name: '펫',
							value: 7,
						},
						{
							name: '여행',
							value: 0,
						},
						{
							name: '공간',
							value: 0,
						},
						{
							name: '레저',
							value: 0,
						},
					],
				},
				{
					title: '반려동물과 함께하는 드라이브3',
					weights: [
						{
							name: '펫',
							value: 7,
						},
						{
							name: '여행',
							value: 0,
						},
						{
							name: '공간',
							value: 0,
						},
						{
							name: '레저',
							value: 0,
						},
					],
				},
			],
		},
	];

	return (
		<div className="flex flex-col gap-8">
			{quizList.map((quiz, quizIndex) => (
				<RaceEventBox quiz={quiz} quizIndex={quizIndex} />
			))}
		</div>
	);
}
export default RaceEventTab;

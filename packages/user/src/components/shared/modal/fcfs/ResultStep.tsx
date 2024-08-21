import { ReactNode } from 'react';
import type { ResultStepType } from './QuizStep.tsx';

interface ResultStepProps {
	step: ResultStepType;
}

export default function ResultStep({ step }: ResultStepProps) {
	const imageUrl = IMAGE_URLS[step];
	const { title, subTitle, details } = DESCRIPTIONS[step];

	return (
		<div className="flex h-full w-full flex-col items-center justify-center p-[20px]">
			<img src={imageUrl} alt={`${step} 캐스퍼 캐릭터`} className="h-[230px] object-contain" />
			<p className="text-heading-7 mb-9 font-bold">{title}</p>
			<p className="text-body-1 mb-4 whitespace-pre-line text-center font-medium">{subTitle}</p>
			<caption className="text-body-4 text-neutral-100">{details}</caption>
		</div>
	);
}

const IMAGE_URLS: Record<ResultStepType, string> = {
	'already-done': '/images/fcfs/result/already-done.webp',
	'correct-answer': '/images/fcfs/result/correct.webp',
	'wrong-answer': '/images/fcfs/result/wrong.webp',
	end: '/images/fcfs/result/end.webp',
};

const DESCRIPTIONS: Record<
	ResultStepType,
	{
		title: ReactNode;
		subTitle: ReactNode;
		details: ReactNode;
	}
> = {
	'correct-answer': {
		title: (
			<>
				당신을 <strong>캐스퍼 박사</strong>로 임명합니다!
			</>
		),
		subTitle: '잽싸게 정답을 맞혀 선착순 이벤트에 당첨되었어요.',
		details: '제공해주신 연락처를 통해 경품 제공 예정입니다.',
	},
	'already-done': {
		title: (
			<>
				이미 당신은 <strong>캐스퍼 박사</strong>
			</>
		),
		subTitle: '이전에 정답을 맞힌 캐스퍼 박사셨군요.\n내일 퀴즈도 잽싸게 맞힐 수 있겠죠?',
		details: '제공해주신 연락처를 통해 경품 제공 예정입니다.',
	},
	'wrong-answer': {
		title: (
			<>
				한 번 더 <strong>도전</strong>해봐요!
			</>
		),
		subTitle: '오답이지만 선착순 마감 전까지 재시도할 수 있어요.\n끝날 때까진 끝난 게 아니죠!',
		details: '선착순 퀴즈 이벤트는 매일 오후 3시 15분에 오픈합니다.',
	},
	end: {
		title: (
			<>
				<strong>정답</strong>입니다!
			</>
		),
		subTitle: '아쉽지만 금일 선착순 이벤트가 마감되었어요.\n내일은 조금만 더 빠르게 도전해봐요!',
		details: '선착순 퀴즈 이벤트는 매일 오후 3시 15분에 오픈합니다.',
	},
};

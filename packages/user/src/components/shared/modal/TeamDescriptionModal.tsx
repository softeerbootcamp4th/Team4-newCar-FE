import type { Category } from '@softeer/common/types';
import Modal, { ModalProps } from 'src/components/common/Modal.tsx';
import { TEAM_DESCRIPTIONS } from 'src/constants/teamDescriptions.ts';

interface TeamDescriptionModalProps extends Omit<ModalProps, 'children'> {
	type: Category;
}

export default function TeamDescriptionModal({ type, openTrigger }: TeamDescriptionModalProps) {
	const { title, subTitle, details } = TEAM_DESCRIPTIONS[type];

	const imageBaseUrl = `images/team-modal/${type}`;

	return (
		<Modal openTrigger={openTrigger}>
			<div className="flex w-full flex-col items-center justify-center p-[30px] px-[40px] py-[30px] sm:h-full sm:px-[50px] sm:py-[40px]">
				<div className="max-w-[350px] w-full sm:max-w-[600px] md:max-w-[800px] lg:max-w-[800px] ">
					<div className="flex flex-col items-center gap-2.5">
						<h6 className="text-heading-11 whitespace-pre-line font-medium text-neutral-100 sm:whitespace-normal">
							{subTitle}
						</h6>
						<h3>{title}</h3>
					</div>
					<div className="mb-7 grid grid-flow-row sm:grid-flow-col">
						<DescriptionImage src={`${imageBaseUrl}-1.png`} />
						<DescriptionImage src={`${imageBaseUrl}-2.png`} />
					</div>
					<p className="text-body-4 text-neutral-100">{details}</p>
				</div>
			</div>
		</Modal>
	);
}

function DescriptionImage({ src }: { src: string }) {
	return (
		<img
			src={src}
			alt="팀 소개"
			className="min-w-1/2 h-full min-h-[240px] w-full max-w-full object-cover"
		/>
	);
}

interface InfoTitleProps {
	title: string;
	subTitle: string;
}
export default function InfoTitle({ title, subTitle }: InfoTitleProps) {
	return (
		<div className="flex flex-col">
			<h6 className="text-primary text-heading-11 font-medium">{title}</h6>
			<h3 className="text-heading-7 font-bold">{subTitle}</h3>
		</div>
	);
}
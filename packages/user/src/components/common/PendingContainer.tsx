export default function PendingContainer({ message }: { message: string }) {
	return (
		<div
			role="status"
			className="m-auto flex h-screen w-screen flex-col items-center justify-center"
		>
			<img
				src="/images/fcfs/result/correct.webp"
				alt="로딩 중 이미지"
				className="h-[400px] max-w-[500px]"
			/>
			<div className="flex flex-col items-center gap-5">
				<h4>{message}</h4>
				<p>잠시만 기다려주세요...</p>
			</div>
		</div>
	);
}

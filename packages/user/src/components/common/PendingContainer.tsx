export default function PendingContainer({ message }: { message: string }) {
	return (
		<div
			role="status"
			className="gap-15 flex h-screen w-screen flex-col items-center justify-center"
		>
			<img src="/images/fcfs/result/correct.png" alt="로딩 중 이미지" />
			<div className="flex flex-col items-center gap-5">
				<h4>{message}</h4>
				<p>잠시만 기다려주세요...</p>
			</div>
		</div>
	);
}

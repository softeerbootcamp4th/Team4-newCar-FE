export default function PendingContainer({ message }: { message?: string }) {
	return (
		<div
			role="status"
			className="gap-15 flex h-screen w-screen flex-col items-center justify-center"
		>
			<img src="/images/fcfs/result/loading.png" alt="로딩 중 이미지" />
			<div className="flex flex-col items-center gap-5">
				<h4>{message || '잠시만 기다려주세요...'}</h4>
				<p>데이터를 불러오는 중입니다. 완료되면 자동으로 이동됩니다.</p>
			</div>
		</div>
	);
}

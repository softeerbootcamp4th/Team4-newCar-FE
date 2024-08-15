import useAuth from 'src/hooks/useAuth.tsx';

export default function SuccessStep() {
  const { user } = useAuth();
  const displayName = user?.name ?? '사용자';

  return (
    <div className="flex flex-col items-center justify-center p-[20px] h-full">
			<img src="/images/fcfs/result/correct.png" alt="로그인 성공 캐스퍼 캐릭터" className="h-[300px] object-contain" />
			<p className="text-body-1 font-medium text-primary">로그인 완료</p>
			<p className="text-heading-7 font-bold">{displayName}님 환영합니다!</p>
    </div>
  );
}

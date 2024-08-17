import { useCallback } from 'react';
import useAuth from 'src/hooks/useAuth.tsx';
import { useToast } from 'src/hooks/useToast.ts';
import socketManager from 'src/services/socket.ts';

const LOGOUT_SUCCESS_TOAST_DECRIPTION = '로그아웃 완료! 꼭 다시 돌아와주세요!';
const TOAST_DISPLAY_SECOND = 1000;

export default function LogoutButton() {
	const { toast } = useToast();
	const { user, clearAuthData } = useAuth();
	const name = user?.name ?? '캐스퍼';

	const logout = useCallback(() => {
		toast({ description: LOGOUT_SUCCESS_TOAST_DECRIPTION });
		setTimeout(() => clearAuthData(), TOAST_DISPLAY_SECOND);
		socketManager.reconnectSocketClient();
	}, [toast]);

	return (
		<div className="flex items-center gap-4">
			<p className="text-detail-1 font-medium">
				<strong>{name}</strong>님 반갑습니다
			</p>
			<span>|</span>
			<button
				type="button"
				onClick={logout}
				className="rounded-1 flex items-center justify-center gap-3 bg-neutral-800 px-2 py-1"
			>
				<p className="text-detail-2">로그아웃</p>
			</button>
		</div>
	);
}

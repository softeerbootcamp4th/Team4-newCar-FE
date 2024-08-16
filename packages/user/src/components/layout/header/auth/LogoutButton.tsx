import useAuth from 'src/hooks/useAuth.tsx';

export default function LogoutButton() {
  const { user, clearAuthData } = useAuth();
  const name = user?.name ?? '캐스퍼';

  const logout = () => clearAuthData();

  return (
    <div className="flex items-center gap-4">
      <p className="text-detail-1 font-medium"><strong>{name}</strong>님 반갑습니다</p>
      <span>|</span>
      <button type="button" onClick={logout} className="flex items-center justify-center gap-3 rounded-1 px-2 py-1 bg-neutral-800">
        <p className="text-detail-2">로그아웃</p>
      </button>
    </div>
  );
}

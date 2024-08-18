import { useState } from 'react';
import { Button } from 'src/components/ui/button.tsx';
import { Input } from 'src/components/ui/input.tsx';
import useAuth from 'src/hooks/useAuth.ts';

function LoginPage() {
	const { login } = useAuth();
	const [adminId, setAdminId] = useState('');
	const [password, setPassword] = useState('');

	const handleIdChange = (newId: string) => {
		setAdminId(newId);
	};

	const handlePasswordChange = (newPassword: string) => {
		setPassword(newPassword);
	};

	const handleLogin = () => {
		login(adminId, password);
	};

	return (
		<div className="flex h-full w-full flex-col items-center justify-center">
			<p className="mb-10">Admin System</p>
			<div className="flex w-[200px] flex-col gap-2">
				<Input
					placeholder="아이디를 입력하세요."
					value={adminId}
					onChange={(event) => handleIdChange(event.target.value)}
				/>
				<Input
					type="password"
					placeholder="비밀번호를 입력하세요."
					value={password}
					onChange={(event) => handlePasswordChange(event.target.value)}
				/>
				<Button onClick={handleLogin}>로그인</Button>
			</div>
		</div>
	);
}
export default LoginPage;

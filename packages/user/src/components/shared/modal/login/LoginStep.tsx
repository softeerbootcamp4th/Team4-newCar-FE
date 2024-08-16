import Button from 'src/components/common/Button.tsx';
import { API_BASE_URL } from 'src/constants/environments.ts';
import RoutePaths from 'src/constants/routePath.ts';

const REDIRECT_URL = `${window.location.origin}${RoutePaths.KakaoOauthRedirect}`;
const KAKAO_AUTH_URL = `${API_BASE_URL}/kakao?redirectUrl=${REDIRECT_URL}`;

export default function LoginStep() {
	const handleSubmit = () => {
		window.location.href = KAKAO_AUTH_URL;
	};

	return (
		<div className="flex h-full w-full flex-col items-center justify-center gap-12">
			<p className="text-heading-9 text-center font-bold">
				이벤트 참여를 위해
				<br />
				<strong>로그인</strong>을 진행해주세요
			</p>
			<Button type="submit" onClick={handleSubmit}>
				카카오 로그인
			</Button>
		</div>
	);
}

import { ACCESS_TOKEN_KEY } from '@softeer/common/constants';
import { Cookie } from '@softeer/common/utils';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from 'src/components/appLayout/Header.tsx';
import SideBarContainer from 'src/components/appLayout/SideBarContainer.tsx';
import SystemContainer from 'src/components/appLayout/System.tsx';
import { ErrorMessage } from 'src/constants/message.ts';
import RoutePaths from 'src/constants/routePath.ts';
import useHeader from 'src/hooks/useHeader.tsx';
import { useAlert } from 'src/store/provider/AlertProvider.tsx';

export default function AppLayout() {
	const { openAlert } = useAlert();
	const { headerTitle } = useHeader();
	const location = useLocation();
	const navigate = useNavigate();
	const accessToken = Cookie.getCookie(ACCESS_TOKEN_KEY);
	useEffect(() => {
		if (location.pathname !== RoutePaths.ROOT) {
			if (!accessToken) {
				navigate(RoutePaths.ROOT, { replace: true });
				openAlert(ErrorMessage.NEED_LOGIN, 'alert');
			}
		}
	}, [location.pathname]);

	return (
		<div className="mx-auto flex h-screen w-screen min-w-[1200px]">
			{
				accessToken && <SideBarContainer />
			}
			<div className="mx-auto flex h-screen w-full max-w-[1200px] gap-10">
				<SystemContainer />
				<div className="flex w-full flex-col p-4 pb-8 pt-8">
					<Header headerTitle={headerTitle} />
					<Outlet />
				</div>
			</div>
		</div>
	);
}

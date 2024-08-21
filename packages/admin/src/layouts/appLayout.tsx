import { ACCESS_TOKEN_KEY } from '@softeer/common/constants';
import { Cookie } from '@softeer/common/utils';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from 'src/components/appLayout/Header.tsx';
import SideBarContainer from 'src/components/appLayout/SideBarContainer.tsx';
import SystemContainer from 'src/components/appLayout/System.tsx';
import CommonErrorBoundary from 'src/components/error/CommonErrorBoundary.tsx';
import { ErrorMessage } from 'src/constants/message.ts';
import RoutePaths from 'src/constants/routePath.ts';
import useHeader from 'src/hooks/useHeader.tsx';
import { useAlert } from 'src/store/provider/AlertProvider.tsx';

export default function AppLayout() {
	const { openAlert } = useAlert();
	const { headerTitle } = useHeader();
	const location = useLocation();
	const navigate = useNavigate();
	const accessToken = Cookie.getCookie<string>(ACCESS_TOKEN_KEY);

	useEffect(() => {
		if (location.pathname !== RoutePaths.ROOT) {
			if (!accessToken) {
				navigate(RoutePaths.ROOT, { replace: true });
				openAlert(ErrorMessage.NEED_LOGIN, 'alert');
			}
		}
		if (location.pathname === RoutePaths.ROOT) {
			if (accessToken) {
				navigate(RoutePaths.EVENT_PAGE, { replace: true });
			}
		}
	}, [location.pathname]);

	return (
		<CommonErrorBoundary>
			<div className="mx-auto flex min-h-screen w-screen min-w-[1200px]">
				{accessToken && <SideBarContainer />}
				<div className="mx-auto flex h-full min-h-screen w-full max-w-[1200px] gap-10">
					<SystemContainer />
					<div className="flex w-full flex-col p-4 pb-8 pt-8">
						<Header headerTitle={headerTitle} />
						<Outlet />
					</div>
				</div>
			</div>
		</CommonErrorBoundary>
	);
}

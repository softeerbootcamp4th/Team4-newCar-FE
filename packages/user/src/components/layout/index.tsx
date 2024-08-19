import { Outlet } from 'react-router-dom';
import DeferredWrapper from 'src/components/common/DeferredWrapper.tsx';
import PendingContainer from 'src/components/common/PendingContainer.tsx';
import useInitialize from 'src/hooks/useInitialize.ts';
import Banner from './banner/index.tsx';
import BodyContainer from './BodyContainer.tsx';
import FCFSFloatingButtonController from './fcfsController/index.tsx';
import Footer from './footer/index.tsx';
import Header from './header/index.tsx';
import TopSectionContainer from './TopSectionContainer.tsx';

export default function Layout() {
	const { user, newUser, isFetching } = useInitialize();

	if (isFetching || user?.encryptedUserId !== newUser?.encryptedUserId) {
		return (
			<DeferredWrapper>
				<PendingContainer message="사용자 정보를 불러오고 있습니다!" />
			</DeferredWrapper>
		);
	}

	return (
		<div className="relative flex h-screen min-w-max flex-col overflow-hidden">
			<TopSectionContainer>
				<Header />
				<Banner />
			</TopSectionContainer>
			<BodyContainer>
				<div className="flex-grow">
					<Outlet />
				</div>
				<Footer />
			</BodyContainer>
			<FCFSFloatingButtonController />
		</div>
	);
}

import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { TEAM_HELMET_OPTIONS, TEAM_TYPES } from 'src/constants/team';

function getTeamOgInfo(type: string | null): boolean {
	if (type === null) {
		return {};
	}
	if (TEAM_TYPES.includes(type as (typeof TEAM_TYPES)[number])) {
	}
}

function LinkShareMetaTag() {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const teamType = queryParams.get('teamType');

	if (checkTeamType(teamType)) {
		console.log(TEAM_HELMET_OPTIONS[teamType]);
	}

	return (
		<Helmet>
			{' '}
			{/* <title>React Title</title> */}{' '}
			<meta
				name="description"
				content="나만 알고 싶은 코스메틱 향기 브랜드 - 비누, 천연, 스프레이드"
			/>{' '}
			<meta property="og:image" content="https://example.com/my-image.jpg" />{' '}
			<meta property="og:url" content={window.location.href} />{' '}
		</Helmet>
	);
}
export default LinkShareMetaTag;

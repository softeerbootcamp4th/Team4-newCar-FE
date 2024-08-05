import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { TEAM_HELMET_OPTIONS, TEAM_TYPES } from 'src/constants/team';
import { Category } from 'src/types/category';

// 팀 타입 검증 함수
function isValidTeamType(value: string | null): boolean {
	return value !== null && (TEAM_TYPES as readonly string[]).includes(value);
}

function LinkShareMetaTag() {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const teamType = queryParams.get('teamType');

	let helmetOption = TEAM_HELMET_OPTIONS.pet;
	if (isValidTeamType(teamType)) {
		const result = TEAM_HELMET_OPTIONS[teamType as Category];
		if (result) {
			helmetOption = result;
		}
	}

	return (
		<Helmet>
			{/* 일반적인 메타 태그 설정 */}
			<meta name="description" content={helmetOption.description} />
			<meta property="og:image" content={helmetOption.image} />
			<meta property="og:url" content={window.location.href} />
		</Helmet>
	);
}

export default LinkShareMetaTag;

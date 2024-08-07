import { CATEGORIES } from '@softeer/common/constants';
import { Category } from '@softeer/common/types';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { TEAM_HELMET_OPTIONS } from 'src/constants/teamDescriptions.ts';

function isValidTeamType(value: string | null): boolean {
	return value !== null && (CATEGORIES as readonly string[]).includes(value);
}

function LinkShareMetaTag() {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const teamType = queryParams.get('teamType');

	// ?teamType=pet | teamType=place | ... 이런식으로 쿼리스트링 파싱해서 og, description 변경
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
			<meta property="og:title" content="OG 타이틀ㅎㅎ" />
			<meta property="og:description" content={helmetOption.description} />
			<meta property="og:type" content="website" />
			<meta property="og:image" content={helmetOption.image} />
			<meta property="og:url" content={window.location.href} />
		</Helmet>
	);
}

export default LinkShareMetaTag;

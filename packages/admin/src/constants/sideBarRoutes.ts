import RoutePaths from 'src/constants/routePath.ts';

interface Route {
	id: number;
	name: string;
	path?: string;
	subRoutes?: Route[];
}
const SideBarRoutes: Route[] = [
	{
		id: 1,
		name: '이벤트 관리',
		path: RoutePaths.EVENT_PAGE,
	},
	{
		id: 2,
		name: '당첨자 관리',
		subRoutes: [
			{
				id: 1,
				name: '추첨하기',
				path: RoutePaths.RACE_WINNER_DRAW,
			},
			{
				id: 2,
				name: '당첨자 목록',
				path: RoutePaths.WINNER_RESULT,
			},
		],
	},
	{
		id: 3,
		name: '기대평 관리',
		path: RoutePaths.REVIEW,
	},
];

export default SideBarRoutes;

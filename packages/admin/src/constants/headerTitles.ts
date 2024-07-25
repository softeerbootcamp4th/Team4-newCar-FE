import NavTitle from 'src/types/appLayout/types';

interface HeaderTitle {
	id: number;
	title: string;
	navTitles?: NavTitle[];
}
const HeaderTitles: HeaderTitle[] = [
	{
		id: 1,
		title: '이벤트 관리',
		navTitles: [
			{
				navTitleid: 1,
				navTitle: '이벤트 공통',
			},
			{
				navTitleid: 2,
				navTitle: '선착순 퀴즈',
			},
			{
				navTitleid: 1,
				navTitle: '캐스퍼 레이싱',
			},
		],
	},
	{
		id: 2,
		title: '추첨하기',
		navTitles: [
			{
				navTitleid: 1,
				navTitle: '캐스퍼 레이싱 당첨자',
			},
		],
	},
	{
		id: 3,
		title: '당첨자 목록',
		navTitles: [
			{
				navTitleid: 1,
				navTitle: '선착순 퀴즈 당첨자',
			},
			{
				navTitleid: 2,
				navTitle: '캐스퍼 레이싱 당첨자',
			},
		],
	},
	{
		id: 3,
		title: '기대평 관리',
	},
];

export default HeaderTitles;

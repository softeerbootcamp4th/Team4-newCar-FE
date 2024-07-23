interface Route {
    id: number;
    name : string;
    subRoutes?: Route[];
}
 const SideBarRoutes : Route[] = [
    {
        id: 1,
        name: '이벤트 관리',
    }, {
        id: 2,
        name: '당첨자 관리',
        subRoutes: [{
            id: 1,
            name: '추첨하기',
        }, {
            id: 2,
            name: '당첨자 목록',
        }],
    }, {
        id: 3,
        name: '기대평 관리',
    },
];

export default SideBarRoutes;

import { useQuery } from '@tanstack/react-query';
import { API } from 'src/constants/api';
import fetchData from 'src/utils/fetchData';

export interface CommonEvent {
	endTime: string;
	eventManager: string;
	eventName: string;
	startTime: string;
	status: string;
}

const useEvent = () => {
	const commonEventResult = useQuery<CommonEvent>({
		queryFn: async () => {
			try {
				const response = await fetchData({
					path: API.COMMON_EVENT,
					method: 'GET',
				});
				const result = await response.json();
				return result;
			} catch (err) {
				console.log(err);
				// 핸들링 필요함
				// 백엔드 배포 되면 해야징~
			}
		},
		queryKey: [API.COMMON_EVENT],
	});

	return {
		commonEvent: commonEventResult.data,
	};
};
export default useEvent;

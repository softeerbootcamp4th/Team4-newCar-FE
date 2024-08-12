import { useSuspenseQuery } from '@tanstack/react-query';
import QUERY_KEYS from 'src/constants/queryKey.ts';

export type LinkShareCount = { count: number };

export default function useGetLinkShareCount() {
	const { data: linkShareCount } = useSuspenseQuery<LinkShareCount>({
		queryKey: [QUERY_KEYS.LINK_SHARE_COUNT],
		queryFn: fetchMockData,
	});

	return { linkShareCount };
}

const fetchMockData = (): Promise<LinkShareCount> =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve({ count: 3 });
		}, 1000);
	});

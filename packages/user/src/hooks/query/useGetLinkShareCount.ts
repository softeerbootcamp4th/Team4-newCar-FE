import { useSuspenseQuery } from '@tanstack/react-query';
import http from 'src/services/api/index.ts';
import QUERY_KEYS from 'src/services/api/queryKey.ts';

export type LinkShareCount = { clickNumber: number };

export default function useGetLinkShareCount() {
	const { data: linkShareCount } = useSuspenseQuery<LinkShareCount>({
		queryKey: [QUERY_KEYS.GET_LINK_SHARE_COUNT],
		queryFn: () => http.get('/click-number'),
	});

	return { linkShareCount };
}

import { useQuery } from '@tanstack/react-query';
import http from 'src/services/api/index.ts';
import QUERY_KEYS from 'src/services/api/queryKey.ts';

export default function useUpdateShareLinkClickCount(id: string | undefined) {
	const queries = useQuery(clickCountQueryOptions(id));

	return queries;
}

export const clickCountQueryOptions = (id: string | undefined) => ({
	queryKey: [QUERY_KEYS.UPDATE_SHARE_COUNT, id],
	queryFn: () => http.get(`/share-link/${id}`),
	enabled: Boolean(id),
});

import { LoaderFunction, redirect } from 'react-router-dom';
import RoutePaths from 'src/constants/routePath.ts';
import { clickCountQueryOptions } from 'src/hooks/query/useUpdateShareLinkClickCount.ts';
import { queryClient } from 'src/libs/query/index.tsx';

const shareRedirectLoader: LoaderFunction = async ({ params }) => {
	const { id } = params;

	await queryClient.fetchQuery(clickCountQueryOptions(id));

	return redirect(RoutePaths.Home);
};

export default shareRedirectLoader;

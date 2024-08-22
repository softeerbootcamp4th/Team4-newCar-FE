import { LoaderFunction, redirect } from 'react-router-dom';
import RoutePaths from 'src/constants/routePath.ts';
import http from 'src/services/api/index.ts';

const shareRedirectLoader: LoaderFunction = async ({ params }) => {
	const { id } = params;

	try {
		await http.get(`/share-link/${id}`);
	} catch (error) {
		return redirect(RoutePaths.Home);
	}

	return redirect(RoutePaths.Home);
};

export default shareRedirectLoader;

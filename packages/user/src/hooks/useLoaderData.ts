import { useLoaderData as useRouterLoaderData } from 'react-router-dom';

const useLoaderData = <T>() => useRouterLoaderData() as T;
export default useLoaderData;

import { QueryClient } from 'react-query';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			refetchOnMount: false,
			refetchOnReconnect: false,
			retry: 1,
			staleTime: 120 * 1000,
		},
	},
});

export default queryClient;

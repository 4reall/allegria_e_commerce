import { useRouter } from 'next/router';
import { useInfiniteQuery } from 'react-query';
import { productService } from '../services/Product.service';

export const useInfiniteProducts = (limit: number) => {
	const router = useRouter();
	const { data, ...rest } = useInfiniteQuery(
		['products', router.query],
		async ({ pageParam }) => {
			const response = await productService.getProducts({
				...router.query,
				page: pageParam,
				limit: limit,
			});
			return response.data;
		},
		{
			refetchOnWindowFocus: false,
			refetchOnMount: false,
			refetchOnReconnect: false,
			retry: 1,
			staleTime: 120 * 1000,
			enabled: router.isReady,
			keepPreviousData: true,
			getNextPageParam: (lastPage, allPages) => {
				if (!lastPage) return 0;

				const isLastPage =
					lastPage.totalCount <= allPages.length * limit;
				return !isLastPage ? allPages.length + 1 : undefined;
			},
		}
	);

	return {
		data: data
			? {
					totalCount: data.pages[0].totalCount,
					products: data.pages.map((page) => page.products),
			  }
			: data,
		...rest,
	};
};

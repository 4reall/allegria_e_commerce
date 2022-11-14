import { useRouter } from 'next/router';

export const useUrl = () => {
	const router = useRouter();
	const queries = router.query;

	const isUrlContains = (key: string, query: string): boolean => {
		const q = queries[key];
		if (!q || Array.isArray(q)) return false;
		return q.split(',').includes(query);
	};

	const removeParam = (source: string, query: string) => {
		const newQuery = source.split(',').filter((param) => param !== query);
		if (!newQuery) return null;
		return newQuery.length > 1 ? newQuery.join(',') : newQuery.join('');
	};

	const handleQueryChange = (key: string, query: string) => {
		const q = queries[key];
		if (!q) {
			router.replace({
				query: {
					...router.query,
					[key]: query,
				},
			});
			console.log(q);
			return;
		}

		if (isUrlContains(key, query)) {
			const newQuery = removeParam(q as string, query);
			console.log(newQuery);
			if (newQuery) {
				router.replace({
					query: {
						...queries,
						[key]: newQuery,
					},
				});
			} else {
				const newQueries = Object.fromEntries(
					Object.entries(queries).filter((entry) => entry[0] !== key)
				);
				router.push({
					query: {
						...newQueries,
					},
				});
			}
			return;
		}

		if (key in queries) {
			router.replace({
				query: {
					...queries,
					[key]: `${q},${query}`,
				},
			});
		}
	};

	return { isUrlContains, handleQueryChange };
};

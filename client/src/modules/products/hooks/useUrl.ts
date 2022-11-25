import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

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

	const handleQueryChange = (
		key: string,
		query: string,
		multiple: boolean = true
	) => {
		const q = queries[key];
		if (!q || !multiple) {
			console.log('key', key, 'query', query);
			router.replace({
				query: {
					...router.query,
					[key]: query,
				},
			});
			return;
		}

		console.log('a');

		// if chosen an active query it should be removed
		if (isUrlContains(key, query)) {
			const newQuery = removeParam(q as string, query);
			// if there are extra queries after removing
			if (newQuery) {
				router.replace({
					query: {
						...queries,
						[key]: newQuery,
					},
				});
				return;
			} else {
				// if that was the last query
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
	const setQueryObject = (query: ParsedUrlQuery, clear: boolean = false) => {
		if (clear) {
			router.replace({ query: { ...query } });
		} else {
			router.replace({ query: { ...router.query, ...query } });
		}
	};

	return { isUrlContains, handleQueryChange, setQueryObject };
};

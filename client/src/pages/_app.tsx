import type { AppProps } from 'next/app';
import 'common/styles/global.css';
import { appWithTranslation } from 'next-i18next';


	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<SessionProvider
					// refetchInterval={14}
					session={pageProps.session}
				>
					{/*<Header />*/}
					<Component {...pageProps} />
				</SessionProvider>
			</Hydrate>
		</QueryClientProvider>
	);
}

// @ts-ignore
export default appWithTranslation(App);

import type { AppProps } from 'next/app';
import 'common/styles/global.css';
import { appWithTranslation } from 'next-i18next';
import { useState } from 'react';
import {
	DehydratedState,
	Hydrate,
	QueryClient,
	QueryClientProvider,
} from 'react-query';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
import Header from 'common/components/Header';
import { ReactQueryDevtools } from 'react-query/devtools';

interface PageProps {
	dehydratedState: DehydratedState;
	session: Session;
}

function App({ Component, pageProps }: AppProps<PageProps>) {
	const [queryClient] = useState(() => new QueryClient());

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
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

// @ts-ignore
export default appWithTranslation(App);

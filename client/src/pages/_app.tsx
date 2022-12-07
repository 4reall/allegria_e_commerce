import { DevSupport } from '@react-buddy/ide-toolbox';
import Header from 'common/components/Header/Header';
import Layout from 'layouts/Layout';
import type { AppProps } from 'next/app';
import 'common/styles/global.css';
import { appWithTranslation } from 'next-i18next';
import Breadcrumbs from 'nextjs-breadcrumbs';
import { useState } from 'react';
import {
	DehydratedState,
	Hydrate,
	QueryClient,
	QueryClientProvider,
} from 'react-query';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
import { ReactQueryDevtools } from 'react-query/devtools';
import 'nextjs-breadcrumbs/dist/index.css';
import { ComponentPreviews, useInitial } from 'dev';

interface PageProps {
	dehydratedState: DehydratedState;
	session: Session;
}

function App({ Component, pageProps }: AppProps<PageProps>) {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<SessionProvider session={pageProps.session}>
					<Layout>
						<DevSupport
							ComponentPreviews={ComponentPreviews}
							useInitialHook={useInitial}
						>
							<Component {...pageProps} />
						</DevSupport>
					</Layout>
				</SessionProvider>
			</Hydrate>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

// @ts-ignore
export default appWithTranslation(App);

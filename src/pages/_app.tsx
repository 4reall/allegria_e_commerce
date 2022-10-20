import type { AppProps } from 'next/app';
import '@/common/styles/global.css';
import { appWithTranslation } from 'next-i18next';

function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default appWithTranslation(App);

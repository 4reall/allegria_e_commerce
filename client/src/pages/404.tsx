import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Page404 = () => {
	return <h1>404 - Page Not Found</h1>;
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	return {
		props: {
			...(await serverSideTranslations(locale || 'ru', ['common'])),
		},
	};
}

export default Page404;

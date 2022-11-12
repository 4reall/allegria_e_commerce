import type { GetStaticPropsContext, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useTranslation } from 'next-i18next';

const options = ['option 1', 'option 2', 'option 3'];

const Home: NextPage = () => {
	const { t } = useTranslation('about');

	return <div className="p-4">{t('title')}</div>;
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	return {
		props: {
			...(await serverSideTranslations(locale || 'ru', ['about'])),
		},
	};
}

export default Home;

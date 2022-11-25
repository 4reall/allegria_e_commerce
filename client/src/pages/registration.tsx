import { SignUpPage } from 'modules/auth';
import { GetStaticPropsContext } from 'next';
import { useSession } from 'next-auth/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Registration = () => {
	return <SignUpPage />;
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	return {
		props: {
			...(await serverSideTranslations(locale || 'ru', ['common'])),
		},
	};
}

export default Registration;

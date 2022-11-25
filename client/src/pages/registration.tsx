import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SignUpPage } from 'modules/auth';

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

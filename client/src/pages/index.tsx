import type { GetStaticPropsContext, NextPage } from 'next';
import Typography from 'common/components/_base/Typography/Typography';
import cn from 'classnames';
import Input from 'common/components/_base/Input/Input';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';

const Home: NextPage = () => {
	return (
		<div className="p-4">
			<Input align="start" placeholder="test" />
		</div>
	);
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	return {
		props: {
			...(await serverSideTranslations(locale || 'ru', ['about'])),
		},
	};
}

export default Home;

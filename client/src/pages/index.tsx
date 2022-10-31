import type { GetStaticPropsContext, NextPage } from 'next';
import Typography from 'common/components/_base/Typography/Typography';
import cn from 'classnames';
import Input from 'common/components/_base/Input/Input';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Button from 'common/components/_base/Button/Button';
import Checkbox from 'common/components/_base/Checkbox/Checkbox';
import RadioButtons from 'common/components/_base/RadioButtons/RadioButtons';
import RoundLabel from 'common/components/_base/RoundLabel';
import { HeartIcon } from '@radix-ui/react-icons';

const options = ['option 1', 'option 2', 'option 3'];

const Home: NextPage = () => {
	return <div className="p-4"></div>;
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	return {
		props: {
			...(await serverSideTranslations(locale || 'ru', ['about'])),
		},
	};
}

export default Home;

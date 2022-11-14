import type { GetStaticPropsContext, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel from 'common/components/Carousel/Carousel';
import Sidebar from 'common/components/_base/Sidebar/Sidebar';
import Button from 'common/components/_base/Button/Button';
import ScrollArea from 'common/components/_base/ScrollArea/ScrollArea';
import Typography from 'common/components/_base/Typography/Typography';

const options = ['option 1', 'option 2', 'option 3'];

const images = [
	'https://img.ltwebstatic.com/images3_pi/2021/08/13/1628835748ca6689f27e457e5c43679227513cd395.webp',
	'https://img.ltwebstatic.com/images3_pi/2021/10/10/16338051716d38e86edbc84ad5f25d875e1dd0c658.webp',
	'https://img.ltwebstatic.com/images3_pi/2021/08/13/1628835748ca6689f27e457e5c43679227513cd395.webp',
	'https://img.ltwebstatic.com/images3_pi/2021/08/13/1628835748ca6689f27e457e5c43679227513cd395.webp',
];

const Home: NextPage = () => {
	const { t } = useTranslation('about');

	return (
		<div className="bg-beige-dark flex h-screen w-screen items-center justify-center p-4">
			{/*<Carousel images={images} />*/}
			{/*<Sidebar*/}
			{/*	align="left"*/}
			{/*	renderTrigger={(open, setOpen) => (*/}
			{/*		<Button onClick={() => setOpen(!open)}>click</Button>*/}
			{/*	)}*/}
			{/*/>*/}
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

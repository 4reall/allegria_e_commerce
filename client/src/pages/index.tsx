import type { GetStaticPropsContext, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import SignInModal from 'modules/auth/components/SignInModal';
import Button from 'common/components/_base/Button/Button';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

// const options = ['option 1', 'option 2', 'option 3'];

const images = [
	'https://img.ltwebstatic.com/images3_pi/2021/08/13/1628835748ca6689f27e457e5c43679227513cd395.webp',
	'https://img.ltwebstatic.com/images3_pi/2021/10/10/16338051716d38e86edbc84ad5f25d875e1dd0c658.webp',
	'https://img.ltwebstatic.com/images3_pi/2021/08/13/1628835748ca6689f27e457e5c43679227513cd395.webp',
	'https://img.ltwebstatic.com/images3_pi/2021/08/13/1628835748ca6689f27e457e5c43679227513cd395.webp',
];

const options = [
	'Lorem',
	'ipsum',
	'dolor',
	'sit',
	'amet',
	'consectetur',
	'adipisicing ',
	'elit. ',
	'Accusa mus',
	'exercitationem ',
	'ipsam',
	'itaque',
	'iure',
	'imilique?',
	'Animi',
	'distinctio',
	'dolorum',
	'eum',
	'labore ',
	'nemo ',
	'nobis ',
	'placeat ',
];

const Home: NextPage = () => {
	const { t } = useTranslation('about');

	return (
		<div className="bg-beige-dark flex h-screen w-screen items-center justify-center p-4">
			<SignInModal trigger={<Button text="open" />} />
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

import Header from 'common/components/Header/Header';
import { useTranslation } from 'next-i18next';
import { getAllRoutes } from 'pages/[...categories]';
import { PropsWithChildren, useEffect } from 'react';

const Layout = ({ children }: PropsWithChildren<{}>) => {
	const { t } = useTranslation('common');

	// useEffect(() => {
	// 	console.log(getAllRoutes(t('navLinks', { returnObjects: true })));
	// }, []);

	return (
		<>
			<Header navLinks={t('navLinks', { returnObjects: true })} />
			<main className="mt-16 min-h-screen">{children}</main>
		</>
	);
};

export default Layout;

import { LinkGroup } from 'common/types/Link';
import {
	productService,
	ProductsPage,
	ProductsPageProps,
} from 'modules/products';
import {
	GetStaticPaths,
	GetStaticProps,
	GetStaticPropsContext,
	InferGetStaticPropsType,
} from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getAllRoutes = (navLinks: LinkGroup[]) => {
	const result: string[] = [];

	const recursive = (tabGroup: LinkGroup, path: string[]) => {
		result.push(tabGroup.link.href);

		if (tabGroup.items.length === 0) {
			return;
		}

		tabGroup.items.forEach((tabGroup) => {
			recursive(tabGroup, path);
		});
	};

	navLinks.forEach((tabGroup) => {
		recursive(tabGroup, []);
	});

	return result.map((link) => link.split('/').slice(1));
};

export const getStaticPaths: GetStaticPaths = async () => {
	// @ts-ignore
	const { navLinks } = await import(`/public/locales/ru/common.json`);

	const ruPaths = getAllRoutes(navLinks).map((route) => ({
		params: { categories: route },
		locale: 'ru',
	}));
	const enPaths = getAllRoutes(navLinks).map((route) => ({
		params: { categories: route },
		locale: 'en',
	}));

	console.log(ruPaths);

	return {
		paths: [...ruPaths, ...enPaths],
		fallback: false,
	};
};
export const getStaticProps: GetStaticProps<ProductsPageProps> = async ({
	locale,
}) => {
	const { data } = await productService.getInfo();

	return {
		props: {
			...(await serverSideTranslations(locale || 'ru', [
				'products',
				'common',
			])),
			productsInfo: data,
			// @ts-ignore
			linkGroups: (await import(`/public/locales/ru/common.json`))
				.navLinks,
		},
	};
};

const Products = ({
	productsInfo,
	linkGroups,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return <ProductsPage productsInfo={productsInfo} linkGroups={linkGroups} />;
};

export default Products;

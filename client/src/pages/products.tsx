import { GetStaticProps, InferGetStaticPropsType } from 'next';
import {
	productService,
	ProductsPage,
	ProductsPageProps,
} from 'modules/products';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps<ProductsPageProps> = async ({
	locale,
}) => {
	const { data } = await productService.getInfo();

	return {
		props: {
			...(await serverSideTranslations(locale || 'ru', ['products'])),
			productsInfo: data,
		},
	};
};

const Products = ({
	productsInfo,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return <ProductsPage productsInfo={productsInfo} />;
};

export default Products;

import { GetStaticProps, InferGetStaticPropsType } from 'next';
import productService from 'modules/products/services/Product.service';
import { ProductsPage, ProductsPageProps } from 'modules/products';

export const getStaticProps: GetStaticProps<ProductsPageProps> = async () => {
	const { data } = await productService.getInfo();

	return {
		props: {
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

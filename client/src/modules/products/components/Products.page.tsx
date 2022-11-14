import { useInfiniteProducts } from 'modules/products/hooks/useInfiniteProducts';
import Accordion from 'common/components/Accordion/Accordion';
import Typography from 'common/components/_base/Typography/Typography';
import Filters from 'modules/products/components/Filters';
import ProductsList from 'modules/products/components/ProductsList';
import PageContainer from 'common/components/_base/PageContainer';
import React from 'react';
import { IProductsInfo } from 'common/types/Product';
import { AuthService } from 'modules/auth/services/AuthService';

const LIMIT = 10;

const categories = [
	{
		title: 'ОДЕЖДА',
		content: [
			'Свитера толcтовки',
			'Платья юбки',
			'Футболки и топы',
			'Брюки и шорты',
			'Рубашки',
			'Комбинезоны',
			'Леггинсы',
		],
	},
	{
		title: 'Обувь',
		content: ['Кроссовки', 'Шлепанцы'],
	},
	{
		title: 'СУМКИ',
		content: [
			'Сумки',
			'Рюкзаки',
			'Кроссбоди',
			'Поясные',
			'Спортивные',
			'Шопперы',
		],
	},
	{
		title: 'АКСЕСУАРЫ',
		content: [
			'Головные уборы',
			'Перчатки',
			'Шарфы и платки',
			'Носки',
			'Гетры',
		],
	},
	{
		title: 'БЕЛЬЕ',
		content: ['Разное'],
	},
];

export interface ProductsPageProps {
	productsInfo: IProductsInfo;
}

const ProductsPage = ({ productsInfo }: ProductsPageProps) => {
	const { data, fetchNextPage, isFetching, isLoading, hasNextPage } =
		useInfiniteProducts(LIMIT);

	const isDisabled = hasNextPage || isLoading || isFetching;
	return (
		<PageContainer>
			<div className="flex justify-center gap-6">
				<aside className="hidden  w-1/6 lg:block ">
					<Accordion content={categories} />
				</aside>
				<section className="w-full max-w-4xl">
					<Typography
						as="h2"
						uppercase
						className="mb-11"
						variant="2xl"
					>
						Кофты и пиджаки
					</Typography>
					<Filters {...productsInfo} />
					<ProductsList
						disabled={!isDisabled}
						productPages={data}
						fetchNextPage={() => fetchNextPage()}
						limit={LIMIT}
					/>
				</section>
			</div>
		</PageContainer>
	);
};

export default ProductsPage;

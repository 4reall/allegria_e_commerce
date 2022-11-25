import React, { useEffect, useState } from 'react';

import Accordion from 'common/components/Accordion/Accordion';
import Typography from 'common/components/_base/Typography/Typography';
import Button from 'common/components/_base/Button/Button';
import PageContainer from 'common/components/_base/PageContainer';
import { IProductsInfo } from 'common/types/Product';

import Filters from './Filters';
import ProductsList from './ProductsList';
import { useInfiniteProducts } from '../hooks/useInfiniteProducts';

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
	const [disabled, setDisabled] = useState(false);
	const { data, fetchNextPage, isFetching, isLoading, hasNextPage } =
		useInfiniteProducts(LIMIT);

	useEffect(() => {
		setDisabled(!hasNextPage || isLoading || isFetching);
	}, [hasNextPage]);
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
					<Filters totalCount={data?.totalCount} {...productsInfo} />
					<ProductsList productPages={data?.products} limit={LIMIT} />
					<Button
						disabled={disabled}
						onClick={() => fetchNextPage()}
						className="mx-auto block"
						text="load more"
					/>
				</section>
			</div>
		</PageContainer>
	);
};

export default ProductsPage;

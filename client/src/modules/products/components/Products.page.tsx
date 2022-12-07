import * as TabsPrimitive from '@radix-ui/react-tabs';
import React, { useEffect, useState } from 'react';

import SlideIndicator from 'common/components/_base/SlideIndicator';
// import SlideIndicator from 'common/components/_base/SlideIndicator';
import { LinkGroup } from 'common/types/Link';
import Accordion from 'common/components/Accordion/Accordion';
import Typography from 'common/components/_base/Typography/Typography';
import Button from 'common/components/_base/Button/Button';
import PageContainer from 'common/components/_base/PageContainer';
import { IProductsInfo } from 'common/types/Product';

import Filters from './Filters';
import ProductsList from './ProductsList';
import { useInfiniteProducts } from '../hooks/useInfiniteProducts';

const LIMIT = 10;

//
export interface ProductsPageProps {
	productsInfo: IProductsInfo;
	linkGroups: LinkGroup[];
}

const ProductsPage = ({ productsInfo, linkGroups }: ProductsPageProps) => {
	const [disabled, setDisabled] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	const { data, fetchNextPage, isFetching, isLoading, hasNextPage } =
		useInfiniteProducts(LIMIT);

	useEffect(() => {
		setDisabled(!hasNextPage || isLoading || isFetching);
	}, [hasNextPage]);

	const handleTabChange = (label: string) => {
		setActiveIndex(
			linkGroups.findIndex((group) => group.link.label === label)
		);
	};

	return (
		<PageContainer>
			<div className="flex items-start justify-center gap-6">
				<aside className="sticky top-20 hidden lg:block">
					<TabsPrimitive.Root onValueChange={handleTabChange}>
						<TabsPrimitive.List className="relative flex">
							<SlideIndicator
								activeIndex={activeIndex}
								totalItems={linkGroups.length}
								className="bg-accent -bottom-[2px]"
							/>
							{linkGroups.map(({ link }) => (
								<TabsPrimitive.Trigger
									key={link.href}
									value={link.label}
									asChild
								>
									<Typography
										as="button"
										variant="lg"
										uppercase
										className="block px-2"
									>
										{link.label}
									</Typography>
								</TabsPrimitive.Trigger>
							))}
						</TabsPrimitive.List>
						{linkGroups.map(({ link, items }) => (
							<TabsPrimitive.Content
								key={link.href}
								value={link.label}
							>
								<Accordion linkGroups={items} />
							</TabsPrimitive.Content>
						))}
					</TabsPrimitive.Root>
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

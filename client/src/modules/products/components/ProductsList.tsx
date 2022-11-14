import ProductCard from 'common/components/ProductCard/ProductCard';
import RoundLabel from 'common/components/_base/RoundLabel';
import { HeartIcon } from '@radix-ui/react-icons';
import React, { useMemo } from 'react';
import Button from 'common/components/_base/Button/Button';
import ProductSkeleton from 'modules/products/components/ProductSkeleton';
import { IProduct } from 'common/types/Product';

interface ProductsListProps {
	fetchNextPage: () => void;
	disabled: boolean;
	productPages?: IProduct[][];
	limit: number;
}

const ProductsList = ({
	fetchNextPage,
	productPages,
	limit,
	disabled,
}: ProductsListProps) => {
	const skeletonCards = useMemo(() => new Array(limit).fill(''), []);
	return (
		<>
			<div className="xs:grid-cols-2 grid grid-cols-1 gap-x-3.5 gap-y-10 md:grid-cols-3">
				{productPages
					? productPages.map((page) =>
							page.map((product) => (
								<ProductCard
									key={product._id}
									image={product.imagesUrls[0]}
									price={product.price.value}
									name={product.name}
									brand={product.brand}
									topLabel={
										<RoundLabel className="absolute top-2.5 right-2.5 z-10 text-white">
											40%
										</RoundLabel>
									}
									bottomLabel={
										<RoundLabel
											color="white"
											className="absolute bottom-2.5 right-2.5 z-10"
										>
											<HeartIcon width={20} height={20} />
										</RoundLabel>
									}
								/>
							))
					  )
					: skeletonCards.map(() => <ProductSkeleton />)}
			</div>
			<Button
				disabled={disabled}
				onClick={fetchNextPage}
				className="mx-auto block"
				text="load more"
			/>
		</>
	);
};

export default ProductsList;

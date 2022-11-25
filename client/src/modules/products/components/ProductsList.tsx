import ProductCard from 'common/components/ProductCard/ProductCard';
import RoundLabel from 'common/components/_base/RoundLabel';
import { HeartIcon } from '@radix-ui/react-icons';
import React, { useMemo } from 'react';
import { IProduct } from 'common/types/Product';
import ProductSkeleton from './ProductSkeleton';

interface ProductsListProps {
	productPages?: IProduct[][];
	limit: number;
}

const ProductsList = ({ productPages, limit }: ProductsListProps) => {
	const skeletonCards = useMemo(() => new Array(limit).fill(''), []);
	return (
		<div className="xs:grid-cols-2 grid grid-cols-1 gap-x-3.5 gap-y-10 md:grid-cols-3">
			{productPages
				? productPages.map((page) =>
						page.map((product) => (
							<ProductCard
								className="w-2/3 justify-self-center"
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
				: skeletonCards.map((_, i) => <ProductSkeleton key={i} />)}
		</div>
	);
};

export default ProductsList;

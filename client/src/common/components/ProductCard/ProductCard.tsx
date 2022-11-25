import Image from 'next/image';
import React, { ReactNode } from 'react';
import Typography from '../_base/Typography/Typography';

interface ProductCardProps {
	image: string;
	brand: string;
	name: string;
	price: number;
	topLabel: ReactNode;
	bottomLabel: ReactNode;
	className?: string;
}

const ProductCard = ({
	image,
	brand,
	name,
	price,
	topLabel,
	bottomLabel,
	className,
}: ProductCardProps) => {
	return (
		<div className={className}>
			<div className="relative -z-10 mx-auto w-full">
				{topLabel}
				<Image
					height={0}
					width={0}
					sizes={'100vh'}
					className={'h-auto w-full'}
					src={image}
					alt="product image"
					priority
				/>
				{bottomLabel}
			</div>
			<div className="mt-4 flex flex-col items-center ">
				<Typography color="primaryDark" uppercase bold variant="lg">
					{brand}
				</Typography>
				<Typography color="primaryDark">{name}</Typography>
				<Typography bold color="primaryDark" variant="sm">
					{`${price} UAH`}
				</Typography>
			</div>
		</div>
	);
};

export default ProductCard;

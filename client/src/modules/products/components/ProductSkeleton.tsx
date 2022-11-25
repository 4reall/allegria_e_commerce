import ContentLoader from 'react-content-loader';
import { useId } from 'react';

const ProductSkeleton = () => {
	const id = useId();
	return (
		<ContentLoader
			uniqueKey={id}
			className="mx-auto h-[25rem] w-full max-w-[15.625rem]"
		>
			<rect x={0} y={0} className="h-[18.75rem] w-full" />
			<rect
				x="15%"
				y={320}
				className="top-[19rem] mx-auto h-4 w-[70%] text-center"
			/>
			<rect
				x="25%"
				y={350}
				className="top-[21rem] mx-auto h-4 w-[50%] text-center"
			/>
			<rect
				x="10%"
				y={380}
				className="top-[23rem] mx-auto h-4 w-[80%] text-center"
			/>
		</ContentLoader>
	);
};

export default ProductSkeleton;

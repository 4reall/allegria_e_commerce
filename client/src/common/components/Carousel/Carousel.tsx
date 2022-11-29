import Image from 'next/image';
import { Carousel as CarouselPrimitive } from 'react-responsive-carousel';
import { useState } from 'react';

interface CarouselProps {
	images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	return (
		<CarouselPrimitive
			onChange={(index) => setCurrentSlide(index)}
			selectedItem={currentSlide}
			thumbWidth={32}
			renderThumbs={() =>
				images.map((image, i) => (
					<div className="relative h-9 w-9">
						<Image
							alt="thumb image"
							src={image}
							key={i}
							layout="fill"
						/>
					</div>
				))
			}
		>
			{images.map((image, i) => (
				<div className="relative h-72 w-full">
					<Image
						alt="thumb image"
						src={image}
						key={i}
						layout="fill"
					/>
				</div>
			))}
		</CarouselPrimitive>
	);
};

export default Carousel;

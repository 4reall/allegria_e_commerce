import cn from 'classnames';
import { useState } from 'react';
interface SlideIndicatorProps {
	activeIndex: number;
	totalItems: number;
	className: string;
	show?: boolean;
}
const SlideIndicator = ({
	activeIndex,
	totalItems,
	className,
	show = true,
}: SlideIndicatorProps) => {
	return (
		<span
			className={cn(
				'absolute block h-[3px] rounded-md transition-transform transition-opacity duration-300',
				show ? 'opacity-100' : 'opacity-0',
				className
			)}
			style={{
				width: `${Math.floor(100 / totalItems)}%`,
				transform: `translateX(${activeIndex * 100}%)`,
			}}
		/>
	);
};

export default SlideIndicator;

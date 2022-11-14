import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { CSSProperties, PropsWithChildren } from 'react';
import cn from 'classnames';

interface ScrollAreaProps {
	height: CSSProperties['height'];
}

const ScrollArea = ({
	children,
	height,
}: PropsWithChildren<ScrollAreaProps>) => {
	return (
		<ScrollAreaPrimitive.Root
			// style={{ maxHeight: height }}
			className={cn('overflow-hidden bg-white')}
		>
			<ScrollAreaPrimitive.Viewport
				className={cn('h-full max-h-48 w-full')}
			>
				{children}
			</ScrollAreaPrimitive.Viewport>
			<ScrollAreaPrimitive.Scrollbar
				orientation="vertical"
				className={cn('bg-beige w-2')}
			>
				<ScrollAreaPrimitive.Thumb
					className={cn(
						'bg-gray relative h-4 w-[2px] rounded-md',
						'before:absolute before:right-0 before:h-full before:w-10'
					)}
				/>
			</ScrollAreaPrimitive.Scrollbar>
		</ScrollAreaPrimitive.Root>
	);
};

export default ScrollArea;

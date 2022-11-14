import cn from 'classnames';
import { ComponentPropsWithoutRef, CSSProperties } from 'react';

interface ColorLabelOwnProps {
	color: CSSProperties['backgroundColor'];
	isActive?: boolean;
}

type ColorLabelProps = ColorLabelOwnProps &
	Omit<ComponentPropsWithoutRef<'button'>, keyof ColorLabelOwnProps>;

const ColorLabel = ({ color, isActive, ...props }: ColorLabelProps) => {
	return (
		<button
			style={{ backgroundColor: color }}
			{...props}
			className={cn(
				'h-5 w-5 cursor-pointer rounded-full border-[1px] outline-none',
				isActive ? 'border-accent' : 'border-gray'
			)}
		/>
	);
};

export default ColorLabel;

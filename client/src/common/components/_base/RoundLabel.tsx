import { ComponentProps, ElementType, PropsWithChildren } from 'react';
import cn from 'classnames';

const labelConfig = {
	accent: 'bg-accent [&>*]:!text-beige',
	white: 'bg-white [&>*]:!text-primaryDark',
};

interface LabelOwnProps<T extends ElementType = ElementType> {
	color?: keyof typeof labelConfig;
	as?: T;
}

type LabelProps<T extends ElementType> = LabelOwnProps<T> &
	Omit<ComponentProps<T>, keyof LabelOwnProps>;

const baseTag = 'span';

const RoundLabel = <T extends ElementType = typeof baseTag>({
	children,
	color = 'accent',
	as,
	...props
}: PropsWithChildren<LabelProps<T>>) => {
	const Tag = as || baseTag;
	return (
		<Tag
			{...props}
			className={cn(
				labelConfig[color],
				'flex h-12 w-12 items-center justify-center rounded-full py-3 px-[6px]'
			)}
		>
			{children}
		</Tag>
	);
};

export default RoundLabel;

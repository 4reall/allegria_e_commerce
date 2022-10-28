import cn from 'classnames';
import { ComponentProps, ElementType, PropsWithChildren } from 'react';

const typographyConfig = {
	type: {
		decor: 'font-decor',
		normal: 'font-normal',
	},
	color: {
		primary: 'text-primary',
		primaryDark: 'text-primary-dark',
		gray: 'text-gray',
	},
	variant: {
		'2xl': '2xl',
		xl: 'text-xl',
		lg: 'text-lg',
		md: 'text-md',
		sm: 'text-sm',
		xs: 'text-xs',
	},
};

interface TypographyOwnProps<TTag extends ElementType = ElementType> {
	variant?: keyof typeof typographyConfig.variant;
	type?: keyof typeof typographyConfig.type;
	color?: keyof typeof typographyConfig.color;
	as?: TTag;
}

type TypographyProps<TTag extends ElementType> = PropsWithChildren<
	TypographyOwnProps<TTag>
> &
	Omit<ComponentProps<TTag>, 'as'>;

const baseTag = 'span';

const Typography = <TTag extends ElementType = typeof baseTag>({
	variant = 'md',
	color = 'primary',
	type = 'normal',
	children,
	...props
}: TypographyProps<TTag>) => {
	return (
		<span
			className={cn(
				typographyConfig.variant[variant],
				typographyConfig.color[color],
				typographyConfig.type[type]
			)}
			{...props}
		>
			{children}
		</span>
	);
};

export default Typography;

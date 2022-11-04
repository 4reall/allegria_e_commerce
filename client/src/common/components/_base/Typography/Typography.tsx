import cn from 'classnames';
import { ComponentProps, ElementType, PropsWithChildren } from 'react';

const typographyConfig = {
	type: {
		decor: 'font-decor',
		normal: 'font-normal',
		avenir: 'font-avenir',
	},
	color: {
		primary: 'text-primary',
		primaryDark: 'text-primary-dark',
		gray: 'text-gray',
		beige: 'text-beige',
	},
	variant: {
		'2xl': 'text-2xl',
		xl: 'text-xl',
		lg: 'text-lg',
		md: 'text-md',
		sm: 'text-sm',
		xs: 'text-xs',
	},
	spacing: {
		md: 'tracking-[0.2em]',
		sm: 'tracking-[0.1em]',
		none: 'tracking-[0px]',
	},
};

interface TypographyOwnProps<TTag extends ElementType = ElementType> {
	variant?: keyof typeof typographyConfig.variant;
	type?: keyof typeof typographyConfig.type;
	color?: keyof typeof typographyConfig.color;
	spacing?: keyof typeof typographyConfig.spacing;
	uppercase?: boolean;
	bold?: boolean;
	as?: TTag;
}

type TypographyProps<TTag extends ElementType> = TypographyOwnProps<TTag> &
	Omit<ComponentProps<TTag>, keyof TypographyOwnProps>;

const baseTag = 'span';

const Typography = <TTag extends ElementType = typeof baseTag>({
	variant = 'md',
	color = 'primary',
	type = 'normal',
	spacing = 'none',
	uppercase,
	bold,
	children,
	className,
	as,
	...props
}: TypographyProps<TTag>) => {
	const CustomTag = as || baseTag;
	return (
		<CustomTag
			className={cn(
				typographyConfig.variant[variant],
				typographyConfig.color[color],
				typographyConfig.type[type],
				typographyConfig.spacing[spacing],
				bold && 'font-medium',
				uppercase && 'uppercase',
				className
			)}
			{...props}
		>
			{children}
		</CustomTag>
	);
};

export default Typography;

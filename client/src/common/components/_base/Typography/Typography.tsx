import cn from 'classnames';
import {
	ComponentProps,
	ElementType,
	forwardRef,
	ReactElement,
	Ref,
} from 'react';

const typographyConfig = {
	font: {
		decor: 'font-decor',
		normal: 'font-normal',
		inter: 'font-inter',
		avenir: 'font-avenir',
	},
	color: {
		primary: 'text-primary',
		primaryDark: 'text-primary-dark',
		gray: 'text-gray',
		beige: 'text-beige',
		accent: 'text-accent',
		error: 'text-error',
	},
	variant: {
		'2xl': 'text-2xl',
		xl: 'text-xl',
		lg: 'text-lg',
		sm: 'text-sm',
		xs: 'text-xs',
		none: '',
	},
	spacing: {
		md: 'tracking-[0.2em]',
		sm: 'tracking-[0.1em]',
		none: 'tracking-[0px]',
	},
};

interface TypographyOwnProps<TTag extends ElementType = ElementType> {
	variant?: keyof typeof typographyConfig.variant;
	font?: keyof typeof typographyConfig.font;
	color?: keyof typeof typographyConfig.color;
	spacing?: keyof typeof typographyConfig.spacing;
	uppercase?: boolean;
	bold?: boolean;
	as?: TTag;
}

export type TypographyProps<TTag extends ElementType> =
	TypographyOwnProps<TTag> &
		Omit<ComponentProps<TTag>, keyof TypographyOwnProps>;

const baseTag = 'span';

export type TypographySignature = <TTag extends ElementType = typeof baseTag>(
	props: TypographyProps<TTag>,
	ref: Ref<HTMLElement>
) => ReactElement;

const Typography = <TTag extends ElementType = typeof baseTag>(
	{
		variant = 'none',
		color = 'primary',
		font = 'normal',
		spacing = 'none',
		uppercase,
		bold,
		children,
		className,
		as,
		...props
	}: TypographyProps<TTag>,
	ref: any
) => {
	const CustomTag = as || baseTag;
	return (
		<CustomTag
			ref={ref}
			className={cn(
				typographyConfig.variant[variant],
				typographyConfig.color[color],
				typographyConfig.font[font],
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

export default forwardRef(Typography) as TypographySignature;

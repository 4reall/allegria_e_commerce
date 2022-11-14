import { ComponentProps, forwardRef, PropsWithChildren } from 'react';
import cn from 'classnames';
import Typography from 'common/components/_base/Typography/Typography';

const buttonConfig = {
	outline: cn(
		'border-primary-dark enabled:hover:bg-gray',
		'disabled:border-gray disabled:border-2 disabled:opacity-30'
	),
	red: cn(
		'border-accent bg-accent enabled:hover:opacity-80',
		'disabled:border-accent disabled:border-2 disabled:opacity-30'
	),
	primary: cn(
		'border-primary-dark bg-primary-dark enabled:hover:opacity-80 disabled:opacity-30'
	),
};

interface ButtonOwnProps {
	variant?: keyof typeof buttonConfig;
	full?: boolean;
	text: string;
}

type ButtonProps = PropsWithChildren<ButtonOwnProps> &
	Omit<ComponentProps<'button'>, keyof ButtonOwnProps>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, variant = 'primary', full, text, ...props }, ref) => {
		return (
			<button
				ref={ref}
				{...props}
				className={cn(
					'max-h-14 border-[1px] px-12 py-3 transition-all duration-200',
					buttonConfig[variant],
					props.className,
					full && 'w-full'
				)}
			>
				<Typography
					uppercase
					color={variant === 'primary' ? 'beige' : 'primaryDark'}
				>
					{text}
				</Typography>
			</button>
		);
	}
);

Button.displayName = 'Button';

export default Button;

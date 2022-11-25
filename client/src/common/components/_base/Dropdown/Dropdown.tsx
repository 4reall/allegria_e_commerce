import {
	ComponentProps,
	ComponentPropsWithoutRef,
	CSSProperties,
	PropsWithChildren,
} from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Typography from 'common/components/_base/Typography/Typography';
import cn from 'classnames';

interface DropdownOwnProps {
	triggerLabel: string;
	borderColor?: 'primary' | 'beige';
	bgColor?: 'bg-white';
	outline?: boolean;
	className?: ComponentProps<'div'>['className'];
}

type DropdownProps = DropdownOwnProps;

const Dropdown = ({
	children,
	borderColor = 'beige',
	bgColor = 'bg-white',
	outline = true,
	triggerLabel,
	className,
}: PropsWithChildren<DropdownProps>) => {
	return (
		<div className={cn(className)}>
			<DropdownMenu.Root modal={false}>
				<DropdownMenu.Trigger
					className={cn(
						'group flex w-full min-w-fit justify-between px-4 py-2',
						`focus:outline-${borderColor} items-center border-${borderColor}`,
						outline
							? 'focus:outline-gray border-[1px]'
							: 'radix-state-open:border-transparent border-b-[1px]'
					)}
				>
					<Typography
						variant="sm"
						color="primaryDark"
						font="normal"
						className="first-letter:uppercase"
					>
						{triggerLabel}
					</Typography>
					<span
						className={cn(
							'group-radix-state-open:rotate-180 ml-4 h-0 w-0',
							'border-t-primary border-r-transparent border-l-transparent',
							'border-r-4 border-l-4 border-t-[6px]'
						)}
					/>
				</DropdownMenu.Trigger>

				<div className="[&>*]:!w-full [&>*]:!min-w-0 [&>*]:!absolute [&>*]:bottom-0 relative w-full ">
					<DropdownMenu.Content
						className={cn(
							`border-[1px] border-${borderColor} focus:border-${borderColor}`,
							'radix-popper-content-wrapper:absolute',
							'animate-slide-down',
							bgColor,
							!outline
								? 'border-[1px]'
								: 'radix-state-open:border-t-0'
						)}
					>
						{children}
					</DropdownMenu.Content>
				</div>
			</DropdownMenu.Root>
		</div>
	);
};

export default Dropdown;

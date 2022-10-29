import { PropsWithChildren } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Typography from 'common/components/_base/Typography/Typography';
import cn from 'classnames';

interface DropdownOwnProps {
	triggerLabel: string;
	borderColor?: 'primary' | 'beige';
	outline?: boolean;
}

type DropdownProps = DropdownOwnProps;

const Dropdown = ({
	children,
	borderColor = 'beige',
	outline,
	triggerLabel,
}: PropsWithChildren<DropdownProps>) => {
	return (
		<DropdownMenu.Root modal={false}>
			<DropdownMenu.Trigger
				className={cn(
					'group w-full px-4 py-2 flex justify-between',
					`focus:outline-${borderColor} items-center border-${borderColor}`,
					!outline
						? 'focus:outline-gray border-[1px]'
						: 'radix-state-closed:border-b-[1px]'
				)}
			>
				<Typography
					variant="sm"
					color="primaryDark"
					type="normal"
					className="first-letter:uppercase"
				>
					{triggerLabel}
				</Typography>
				<span
					className={cn(
						'group-radix-state-open:rotate-180 w-0 h-0',
						'border-r-transparent border-l-transparent border-t-primary',
						'border-r-4 border-l-4 border-t-[6px]',
						'duration-300 transition-all'
					)}
				/>
			</DropdownMenu.Trigger>

			<div className="[&>*]:w-full [&>*]:!absolute w-full relative">
				<DropdownMenu.Content
					className={cn(
						`border-[1px] border-${borderColor} focus:border-${borderColor}`,
						'radix-popper-content-wrapper:absolute',
						'animate-slide-down',
						outline ? 'border-[1px]' : 'radix-state-open:border-t-0'
					)}
				>
					{children}
				</DropdownMenu.Content>
			</div>
		</DropdownMenu.Root>
	);
};

export default Dropdown;

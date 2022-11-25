import {
	CheckIcon,
	ChevronDownIcon,
	ChevronUpIcon,
} from '@radix-ui/react-icons';
import { SelectProps } from '@radix-ui/react-select';
import cn from 'classnames';
import { ComponentProps, PropsWithChildren } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import Typography from 'common/components/_base/Typography/Typography';

export interface IOption {
	name: string;
	value: string;
}

interface SelectOwnProps<T> {
	label?: string;
	options: IOption[];
	borderColor?: 'primary' | 'beige';
	bgColor?: 'bg-white';
	outline?: boolean;
	className?: ComponentProps<'div'>['className'];
	onValueChange?: SelectProps['onValueChange'];
}

// type SelectProps = SelectOwnProps;

const Select = <T,>({
	options,
	borderColor = 'beige',
	bgColor = 'bg-white',
	outline = true,
	className,
	onValueChange,
}: PropsWithChildren<SelectOwnProps<T>>) => {
	return (
		<SelectPrimitive.Root
			defaultValue={options[0].value}
			onValueChange={onValueChange}
		>
			<SelectPrimitive.Trigger
				className={cn(
					'group flex justify-between px-4 py-2',
					`focus:outline-${borderColor} items-center border-${borderColor}`,
					outline
						? 'focus:outline-gray border-[1px]'
						: 'radix-state-open:border-transparent border-b-[1px]',
					className
				)}
			>
				<Typography
					variant="sm"
					color="primaryDark"
					font="normal"
					className="first-letter:uppercase"
				>
					<SelectPrimitive.Value />
				</Typography>
				<ChevronDownIcon className="ml-4" />
			</SelectPrimitive.Trigger>
			<SelectPrimitive.Portal>
				<SelectPrimitive.Content
					className={cn(
						`border-[1px] border-${borderColor} focus:border-${borderColor} overflow-hidden`,
						'animate-appear-in rounded-md',
						'radix-popper-content-wrapper',
						bgColor,
						!outline
							? 'border-[1px]'
							: 'radix-state-open:border-t-0'
					)}
				>
					<SelectPrimitive.ScrollUpButton className="flex h-8 w-full items-center justify-center md:h-6">
						<ChevronUpIcon />
					</SelectPrimitive.ScrollUpButton>
					<SelectPrimitive.Viewport className="p-2">
						{options.map((option) => (
							<SelectPrimitive.Item
								key={option.value}
								className={cn(
									'relative flex items-center rounded-md py-2 pl-6 pr-5 transition-colors duration-75',
									'md:radix-highlighted:bg-black/[5%] radix-highlighted:outline-none cursor-pointer'
								)}
								value={option.value}
							>
								<SelectPrimitive.ItemIndicator className="absolute left-[2px]">
									<CheckIcon className="h-[18px] w-[18px]" />
								</SelectPrimitive.ItemIndicator>
								<SelectPrimitive.ItemText>
									{option.name}
								</SelectPrimitive.ItemText>
							</SelectPrimitive.Item>
						))}
					</SelectPrimitive.Viewport>
					<SelectPrimitive.ScrollDownButton className="flex h-8 items-center justify-center md:h-6">
						<ChevronDownIcon />
					</SelectPrimitive.ScrollDownButton>
				</SelectPrimitive.Content>
			</SelectPrimitive.Portal>
		</SelectPrimitive.Root>
	);
};

export default Select;

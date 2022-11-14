import * as AccordionPrimitive from '@radix-ui/react-accordion';
import Typography from '../_base/Typography/Typography';
import cn from 'classnames';
import { PlusIcon, MinusIcon } from '@radix-ui/react-icons';

interface AccordionItemProps {
	title: string;
	content: string[];
	index: number;
	isUppercase?: boolean;
}

const AccordionItem = ({ title, content, index }: AccordionItemProps) => {
	return (
		<AccordionPrimitive.Item
			value={`item-${index}`}
			className="border-beige border-b-[1px] first-of-type:border-t-[1px] "
		>
			<AccordionPrimitive.Header>
				<AccordionPrimitive.Trigger
					className={cn('group', 'h-full', 'w-full', 'py-4 ')}
				>
					<div className="relative flex items-center justify-between">
						<Typography
							bold
							uppercase
							type="inter"
							color="primaryDark"
						>
							{title}
						</Typography>
						<PlusIcon
							width={20}
							height={20}
							className={cn(
								'text-primary-dark absolute right-0 duration-100',
								'group-radix-state-closed:opacity-100',
								'group-radix-state-open:opacity-0'
							)}
						/>
						<MinusIcon
							width={20}
							height={20}
							className={cn(
								'text-accent absolute right-0 duration-100',
								'group-radix-state-open:opacity-100',
								'group-radix-state-closed:opacity-0'
							)}
						/>
					</div>
				</AccordionPrimitive.Trigger>
			</AccordionPrimitive.Header>
			<AccordionPrimitive.Content
				className={cn(
					'overflow-hidden last-of-type:mb-4',
					'radix-state-open:animate-slide-down-accordion',
					'radix-state-closed:animate-slide-up-accordion'
				)}
			>
				{content.map((item, index) => (
					<Typography
						className="hover:!text-accent block cursor-pointer"
						type="inter"
						key={index}
					>
						{item}
					</Typography>
				))}
			</AccordionPrimitive.Content>
		</AccordionPrimitive.Item>
	);
};

export default AccordionItem;

import { Label } from '@radix-ui/react-label';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { ReactNode } from 'react';
import cn from 'classnames';

interface RadioButtonsProps {
	options: string[];
}

const RadioButtons = ({ options }: RadioButtonsProps) => {
	return (
		<RadioGroup.Root>
			{options.map((option) => (
				<RadioGroup.Item
					id={option}
					value={option}
					className={cn('flex items-center')}
				>
					<RadioGroup.Indicator
						forceMount
						className={cn(
							'border-gray mr-2 block h-4 w-4 rounded-full border-[1px]',
							'radix-state-checked:bg-accent'
						)}
					/>
					<Label
						htmlFor={option}
						className="text-primary first-letter:uppercase"
					>
						{option}
					</Label>
				</RadioGroup.Item>
			))}
		</RadioGroup.Root>
	);
};

export default RadioButtons;

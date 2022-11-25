import * as RCheckbox from '@radix-ui/react-checkbox';
import { Label } from '@radix-ui/react-label';
import cn from 'classnames';
import { CheckIcon } from '@radix-ui/react-icons';
import { forwardRef, ReactNode, useEffect, useState } from 'react';

interface CheckboxProps {
	label?: ReactNode | string;
	value?: boolean;
	onChange?: (checked: boolean) => void;
}

const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
	({ label, value, onChange }, ref) => {
		const [checked, setChecked] = useState(false);

		useEffect(() => {
			setChecked(value ?? false);
		}, [value]);

		const handleChange = (checked: boolean) => {
			if (onChange) onChange(checked);
			else setChecked(checked);
		};

		return (
			<Label className="flex items-center">
				<RCheckbox.Root
					checked={checked}
					onCheckedChange={handleChange}
					ref={ref}
				>
					<RCheckbox.Indicator
						forceMount
						className={cn(
							'border-gray group block h-4 w-4 border-[1px]',
							'flex items-center justify-center',
							'radix-state-checked:border-primary-dark'
						)}
					>
						<CheckIcon
							className={cn(
								'group-radix-state-checked:block hidden',
								'group-radix-state-checked:bg-primary-dark text-white'
							)}
						/>
					</RCheckbox.Indicator>
				</RCheckbox.Root>
				<span className="ml-2">{label}</span>
			</Label>
		);
	}
);

export default Checkbox;

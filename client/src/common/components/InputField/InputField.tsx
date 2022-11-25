import { ErrorMessage } from '@hookform/error-message';
import {
	FieldValues,
	Path,
	useController,
	useFormContext,
} from 'react-hook-form';
import { ComponentProps } from 'react';
import cn from 'classnames';

import Typography from 'common/components/_base/Typography/Typography';
import Input from 'common/components/_base/Input/Input';

interface InputFieldProps<T extends FieldValues = FieldValues> {
	name: Path<T>;
	password?: boolean;
	className?: ComponentProps<'div'>['className'];
	full?: boolean;
	placeholder?: string;
	type?: ComponentProps<'input'>['type'];
	persist?: boolean;
}

const InputField = <T extends FieldValues>({
	name,
	password,
	className,
	full = true,
	placeholder,
	type,
}: InputFieldProps<T>) => {
	const { formState, control } = useFormContext<T>();
	const { field } = useController({ control, name });
	const { errors } = formState;

	return (
		<div className={cn(className, full && 'w-full')}>
			<Input
				error={!!errors[name]}
				placeholder={placeholder}
				type={password ? 'password' : type}
				className="mb-[2px]"
				{...field}
			/>
			<ErrorMessage
				errors={errors}
				name={name as any}
				render={({ message }) => (
					<Typography variant="sm" color="error">
						{message}
					</Typography>
				)}
			/>
		</div>
	);
};

export default InputField;

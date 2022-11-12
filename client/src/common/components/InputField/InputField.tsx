import { ErrorMessage } from '@hookform/error-message';
import Input from 'common/components/_base/Input/Input';
import Typography from 'common/components/_base/Typography/Typography';
import { FieldValues, Path, useFormContext } from 'react-hook-form';
import { ComponentProps } from 'react';
import cn from 'classnames';

interface InputFieldProps<T extends FieldValues = FieldValues> {
	name: Path<T>;
	password?: boolean;
	className?: ComponentProps<'div'>['className'];
	full?: boolean;
	placeholder?: string;
}

const InputField = <T extends FieldValues>({
	name,
	password,
	className,
	full = true,
	placeholder,
}: InputFieldProps<T>) => {
	const { formState, register } = useFormContext<T>();
	const { errors } = formState;
	return (
		<div className={cn(className, full && 'w-full')}>
			<Input
				error={!!errors[name]}
				placeholder={placeholder}
				type={password ? 'password' : ''}
				{...register(name)}
			/>
			<ErrorMessage
				errors={errors}
				name={name as any}
				render={({ message }) => <Typography>message</Typography>}
			/>
		</div>
	);
};

export default InputField;

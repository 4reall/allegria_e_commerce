import {
	FieldValues,
	Path,
	useController,
	useFormContext,
} from 'react-hook-form';
import { ComponentProps, ReactNode } from 'react';
import Checkbox from 'common/components/_base/Checkbox/Checkbox';
import cn from 'classnames';
import { ErrorMessage } from '@hookform/error-message';
import Typography from 'common/components/_base/Typography/Typography';

interface InputFieldProps<T extends FieldValues = FieldValues> {
	name: Path<T>;
	className?: ComponentProps<'div'>['className'];
	label?: string | ReactNode;
}

const CheckboxField = <T extends FieldValues>({
	name,
	className,
	label,
}: InputFieldProps<T>) => {
	const { formState, control } = useFormContext<T>();
	const { errors } = formState;
	const { field } = useController({ name, control });
	return (
		<div className={cn(className)}>
			<Checkbox label={label} {...field} />
			<ErrorMessage
				errors={errors}
				name={name as any}
				render={({ message }) => (
					<Typography color="error" variant="sm" className="block">
						{message}
					</Typography>
				)}
			/>
		</div>
	);
};

export default CheckboxField;

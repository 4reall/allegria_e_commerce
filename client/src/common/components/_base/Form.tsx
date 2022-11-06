import { ComponentProps, PropsWithChildren } from 'react';
import {
	useForm,
	FormProvider,
	SubmitHandler,
	FieldValues,
	UseFormProps,
} from 'react-hook-form';

interface FormProps<T extends FieldValues = FieldValues> {
	onSubmit: SubmitHandler<T>;
	className?: ComponentProps<'div'>['className'];
	options?: UseFormProps<T>;
}

const Form = <T extends FieldValues>({
	children,
	onSubmit,
	className,
	options,
}: PropsWithChildren<FormProps<T>>) => {
	const methods = useForm<T>(options);
	return (
		<FormProvider {...methods}>
			<form
				className={className}
				onSubmit={methods.handleSubmit(onSubmit)}
			>
				{children}
			</form>
		</FormProvider>
	);
};

export default Form;

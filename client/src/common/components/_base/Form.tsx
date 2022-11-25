import { ComponentProps, PropsWithChildren } from 'react';
import {
	useForm,
	FormProvider,
	SubmitHandler,
	FieldValues,
	UseFormProps,
	UseFormReturn,
} from 'react-hook-form';

interface FormProps<T extends FieldValues = FieldValues> {
	onSubmit: SubmitHandler<T>;
	className?: ComponentProps<'div'>['className'];
	methods: UseFormReturn<T>;
}

const Form = <T extends FieldValues>({
	children,
	onSubmit,
	className,
	methods,
}: PropsWithChildren<FormProps<T>>) => {
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

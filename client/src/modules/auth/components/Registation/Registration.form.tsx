import { z } from 'zod';
import cn from 'classnames';
import { useEffect } from 'react';
import { signIn } from 'next-auth/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';

import { useValidation } from 'modules/auth/components/Registation/useValidation';
import { authService } from 'modules/auth/index';
import RegistrationLayout from 'modules/auth/components/Registation/Registration.layout';

import { useLocalStorage } from 'common/hooks/useLocalStorage';
import Form from 'common/components/_base/Form';

interface SignUpFormProps {
	className?: string;
}

const LOCAL_STORAGE_KEY = 'sign_in_form';

const RegistrationForm = ({ className }: SignUpFormProps) => {
	const validationSchema = useValidation();
	type FormValues = z.infer<typeof validationSchema>;

	const [storedValue, setStoredValue] = useLocalStorage(LOCAL_STORAGE_KEY, {
		name: '',
		surname: '',
		tel: '',
		email: '',
		privacy: false,
		mailing: false,
		password: '',
		repeatPassword: '',
	});

	const methods = useForm<FormValues>({
		resolver: zodResolver(validationSchema),
		reValidateMode: 'onChange',
		mode: 'onTouched',
		defaultValues: storedValue,
	});

	const formData = useWatch({ control: methods.control });

	useEffect(() => {
		setStoredValue(formData);
	}, [formData]);

	const onSubmit: SubmitHandler<FormValues> = async (data, event) => {
		event?.preventDefault();
		try {
			const { repeatPassword, privacy, ...rest } = data;
			await authService.registration(rest);
			await signIn('credentials', {
				password: data.password,
				email: data.email,
				redirect: false,
			});
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<Form
			methods={methods}
			onSubmit={onSubmit}
			className={cn(
				'grid w-full grid-cols-1 gap-5 sm:grid-cols-2',
				className
			)}
		>
			<RegistrationLayout />
		</Form>
	);
};

export default RegistrationForm;

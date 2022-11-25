import cn from 'classnames';
import Form from 'common/components/_base/Form';
import { useLocalStorage } from 'common/hooks/useLocalStorage';
import { useValidation } from 'modules/auth/components/SignUp/useValidation';
import { authService } from 'modules/auth/index';
import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';
import SignUpLayout from 'modules/auth/components/SignUp/SignUp.layout';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

interface SignUpFormProps {
	className?: string;
}

const LOCAL_STORAGE_KEY = 'sign_in_form';

const SignUpForm = ({ className }: SignUpFormProps) => {
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
			const response = await authService.signUp(rest);
			const res = await signIn('credentials', {
				password: data.password,
				email: data.email,
			});
			console.log(response, res);
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
			<SignUpLayout />
		</Form>
	);
};

export default SignUpForm;

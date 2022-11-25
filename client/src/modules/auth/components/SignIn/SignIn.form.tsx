import { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { SubmitHandler, useForm } from 'react-hook-form';

import SignInLayout from 'modules/auth/components/SignIn/SignIn.layout';
import Form from 'common/components/_base/Form';

interface FormValues {
	email: string;
	password: string;
}

const SignInForm = () => {
	const { data } = useSession();
	const methods = useForm<FormValues>();

	const onSubmit: SubmitHandler<FormValues> = async (data, event) => {
		event?.preventDefault();
		await signIn('credentials', {
			email: data.email,
			password: data.password,
			redirect: false,
		});
	};

	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<Form methods={methods} className="w-full" onSubmit={onSubmit}>
			<SignInLayout />
		</Form>
	);
};

export default SignInForm;

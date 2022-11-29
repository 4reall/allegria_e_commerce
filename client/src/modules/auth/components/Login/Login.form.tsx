import { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { SubmitHandler, useForm } from 'react-hook-form';

import LoginLayout from 'modules/auth/components/Login/Login.layout';
import Form from 'common/components/_base/Form';

interface FormValues {
	email: string;
	password: string;
}

const LoginForm = () => {
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
			<LoginLayout />
		</Form>
	);
};

export default LoginForm;

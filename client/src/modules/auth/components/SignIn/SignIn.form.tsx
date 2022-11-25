import InputField from 'common/components/InputField/InputField';
import Button from 'common/components/_base/Button/Button';
import Typography from 'common/components/_base/Typography/Typography';
import Form from 'common/components/_base/Form';
import SignInLayout from 'modules/auth/components/SignIn/SignIn.layout';
import { signIn, useSession } from 'next-auth/react';
import { SubmitHandler } from 'react-hook-form';
import { useEffect } from 'react';

interface FormValues {
	email: string;
	password: string;
}

const SignInForm = () => {
	const { data } = useSession();

	const onSubmit: SubmitHandler<FormValues> = async (data, event) => {
		event?.preventDefault();
		const response = await signIn('credentials', {
			email: data.email,
			password: data.password,
			redirect: false,
		});
	};

	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<Form className="w-full" onSubmit={onSubmit}>
			<SignInLayout />
		</Form>
	);
};

export default SignInForm;

import Form from 'common/components/_base/Form';
import { SubmitHandler } from 'react-hook-form';
import ResetPasswordLayout from 'modules/auth/components/ResetPassword/ResetPassword.layout';

interface FormValues {
	email: string;
}

const ResetPasswordForm = () => {
	const onSubmit: SubmitHandler<FormValues> = async (data, event) => {
		event?.preventDefault();
		// const response = await signIn('credentials', {
		// 	email: login,
		// 	password,
		// 	redirect: false,
		// });
		console.log(data);
	};
	return (
		<Form onSubmit={onSubmit} className="w-full">
			<ResetPasswordLayout />
		</Form>
	);
};

export default ResetPasswordForm;

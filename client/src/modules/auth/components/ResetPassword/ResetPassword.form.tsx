import Form from 'common/components/_base/Form';
import { SubmitHandler, useForm } from 'react-hook-form';
import ResetPasswordLayout from 'modules/auth/components/ResetPassword/ResetPassword.layout';

interface FormValues {
	email: string;
}

const ResetPasswordForm = () => {
	const methods = useForm<FormValues>();
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
		<Form methods={methods} onSubmit={onSubmit} className="w-full">
			<ResetPasswordLayout />
		</Form>
	);
};

export default ResetPasswordForm;

import Form from 'common/components/_base/Form';
import { useSession } from 'next-auth/react';
import { SubmitHandler } from 'react-hook-form';
import SignUpLayout from 'modules/auth/components/SignUp/SignUp.layout';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const SignUpForm = () => {
	const { data } = useSession();

	const validationSchema = z.object({
		name: z.string().trim().min(2),
		surname: z.string().trim().min(2),
		email: z.string().email(),
		password: z.string(),
		tel: z.string(),
		mailing: z.boolean().optional(),
		privacy: z.boolean().refine((privacy) => privacy),
	});

	type FormValues = z.infer<typeof validationSchema>;

	const onSubmit: SubmitHandler<FormValues> = (data, event) => {
		// event?.preventDefault();
		// const response = await signIn('credentials', {
		// 	email: login,
		// 	password,
		// 	redirect: false,
		// });
		console.log(data);
	};
	return (
		<Form
			options={{
				resolver: zodResolver(validationSchema),
				reValidateMode: 'onChange',
			}}
			className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2"
			onSubmit={onSubmit}
		>
			<SignUpLayout />
		</Form>
	);
};

export default SignUpForm;

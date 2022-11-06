import * as Dialog from '@radix-ui/react-dialog';
import Button from 'common/components/_base/Button/Button';
import { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import Input from 'common/components/_base/Input/Input';
import Form from 'common/components/_base/Form';
import InputField from 'common/components/InputField/InputField';
import { SubmitHandler } from 'react-hook-form';

interface FormValues {
	email: string;
	password: string;
}

const Header = () => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const { data } = useSession();

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
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<Button>login</Button>
			</Dialog.Trigger>
			<Dialog.Overlay />
			<Dialog.Content className={'h-96 w-72'}>
				<Form
					options={{}}
					className="bg-beige-dark flex h-full w-full flex-col items-center justify-center"
					onSubmit={onSubmit}
				>
					<div className="w-1/2">
						<InputField name="login" className={'mt-4'} />
						<InputField
							name="password"
							className={'mt-4'}
							password
						/>
						<Button
							className={'mt-4'}
							type="submit"
							variant="primary"
						>
							login
						</Button>
					</div>
				</Form>
			</Dialog.Content>
		</Dialog.Root>
	);
};

export default Header;

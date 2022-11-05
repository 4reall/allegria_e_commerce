import * as Dialog from '@radix-ui/react-dialog';
import Button from 'common/components/_base/Button/Button';
import { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import Input from 'common/components/_base/Input/Input';

const Header = () => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const { data } = useSession();

	const onSubmit = async (e: SubmitEvent) => {
		e.preventDefault();
		const response = await signIn('credentials', {
			email: login,
			password,
			redirect: false,
		});
	};

	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<Button>login</Button>
			</Dialog.Trigger>
			<Dialog.Overlay />
			<Dialog.Content className={'h-96 w-72'}>
				<form
					className="bg-beige-dark flex h-full w-full flex-col items-center justify-center"
					onSubmit={(e) => onSubmit(e as any)}
				>
					<div className="w-1/2">
						<Input
							className={'mt-4'}
							value={login}
							onChange={(e) => setLogin(e.target.value)}
						/>
						<Input
							type="password"
							className={'mt-4'}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						{/*<Button onClick={logTokens}>get acces</Button>*/}
						<Button
							className={'mt-4'}
							type="submit"
							variant="primary"
						>
							login
						</Button>
					</div>
				</form>
			</Dialog.Content>
		</Dialog.Root>
	);
};

export default Header;

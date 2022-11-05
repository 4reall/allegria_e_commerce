import Input from 'common/components/_base/Input/Input';
import { useEffect, useState } from 'react';
import Button from 'common/components/_base/Button/Button';
import { signIn, useSession } from 'next-auth/react';
import { authService } from 'modules/auth/services/AuthService';
import axios from 'common/configs/axios';

const Login = () => {
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
		// console.log(process.env.NEXT_PUBLIC_API_URL);
		// const response = await authService.login({
		// 	email: login,
		// 	password,
		// });
		// console.log(response);
	};

	// const logTokens = async () => {
	// 	const response = await authService.login({
	// 		email: '123@12.ru',
	// 		password: '1234',
	// 	});
	// 	console.log(response);
	//
	// 	const refresh = await axios.get('/refresh', {
	// 		withCredentials: true,
	// 	});
	// 	console.log(refresh);
	// };

	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<form
			className="bg-beige-dark flex h-screen w-screen flex-col items-center justify-center"
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
				<Button className={'mt-4'} type="submit" variant="primary">
					login
				</Button>
			</div>
		</form>
	);
};

export default Login;

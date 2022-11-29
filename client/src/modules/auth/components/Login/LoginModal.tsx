import { ComponentProps, useState } from 'react';
import { ResetPasswordForm, LoginForm } from 'modules/auth/index';
import Modal from 'common/components/_base/Modal/Modal';
import Typography from 'common/components/_base/Typography/Typography';

interface SignInModalProps {
	trigger: ComponentProps<typeof Modal>['trigger'];
}

const LoginModal = ({ trigger }: SignInModalProps) => {
	const [isSignIn, setIsSignIn] = useState(true);
	return (
		<Modal
			className="h-screen w-screen sm:h-[26rem] sm:w-[26rem]"
			trigger={trigger}
			handleOpenChange={(open) => !open && setIsSignIn(true)}
		>
			{isSignIn ? (
				<div className="mx-auto w-full sm:w-[16rem]">
					<Typography
						font="inter"
						color="primaryDark"
						variant="2xl"
						className="mb-10 block text-center"
						uppercase
					>
						вход
					</Typography>
					<LoginForm />
					<Typography
						onClick={() => setIsSignIn(!isSignIn)}
						variant="sm"
						color="accent"
						className="mt-8 block cursor-pointer text-center"
					>
						Забыли пароль / У меня нет акаунта
					</Typography>
				</div>
			) : (
				<div className="mx-auto w-full sm:w-[16rem]">
					<Typography
						font="inter"
						color="primaryDark"
						variant="2xl"
						className="mb-10 block text-center"
						uppercase
					>
						Востановить <br />
						пароль
					</Typography>
					<ResetPasswordForm />
				</div>
			)}
		</Modal>
	);
};

export default LoginModal;

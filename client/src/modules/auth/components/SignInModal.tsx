import Button from 'common/components/_base/Button/Button';
import Modal from 'common/components/_base/Modal/Modal';
import Typography from 'common/components/_base/Typography/Typography';
import { ResetPasswordForm, SignInForm } from 'modules/auth';
import { ComponentProps, ReactNode, useState } from 'react';

interface SignInModalProps {
	trigger: ComponentProps<typeof Modal>['trigger'];
}

const SignInModal = ({ trigger }: SignInModalProps) => {
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
					<SignInForm />
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

export default SignInModal;

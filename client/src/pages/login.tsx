import SignInForm from 'modules/auth/components/SignIn/SignIn.form';
import ResetPasswordForm from 'modules/auth/components/ResetPassword/ResetPassword.form';
import SignUpForm from 'modules/auth/components/SignUp/SignUp.form';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import RoundLabel from 'common/components/_base/RoundLabel';
import { MouseEvent } from 'react';

const Login = () => {
	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {};

	return (
		<div className="bg-beige flex h-screen w-screen justify-center pt-20">
			<div className="flex h-fit w-1/2 bg-white p-8">
				{/*<SignInForm />*/}
				{/*<ResetPasswordForm />*/}
				<SignUpForm />
			</div>
		</div>
	);
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	return {
		props: {
			...(await serverSideTranslations(locale || 'ru', [
				'about',
				'common',
			])),
		},
	};
}

export default Login;

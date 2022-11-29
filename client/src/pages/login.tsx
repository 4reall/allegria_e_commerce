import { LoginModal } from 'modules/auth';
import RegistrationForm from 'modules/auth/components/Registation/Registration.form';
import { GetStaticPropsContext } from 'next';
import { signOut, useSession } from 'next-auth/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Button from 'common/components/_base/Button/Button';
import Modal from 'common/components/_base/Modal/Modal';
import LoginForm from 'modules/auth/components/Login/Login.form';

const Login = () => {
	const signOutHandler = () => {
		signOut({ redirect: false }).then(console.log);
	};
	return (
		<div className="bg-beige flex h-screen w-screen justify-center pt-20">
			<Button text="sign out" onClick={signOutHandler} />
			<LoginModal trigger={<Button text="click" />} />
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

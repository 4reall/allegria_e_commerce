import SignUpForm from 'modules/auth/components/SignUp/SignUp.form';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Button from 'common/components/_base/Button/Button';
import Modal from 'common/components/_base/Modal/Modal';
import SignInForm from 'modules/auth/components/SignIn/SignIn.form';

const Login = () => {
	return (
		<div className="bg-beige flex h-screen w-screen justify-center pt-20">
			<Modal trigger={<Button text="click" />}>
				<div className="flex h-fit bg-white p-8">
					<SignInForm />
					{/*<ResetPasswordForm />*/}
					{/*<SignUpForm />*/}
				</div>
			</Modal>
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

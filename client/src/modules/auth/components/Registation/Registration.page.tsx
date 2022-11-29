import Button from 'common/components/_base/Button/Button';
import PageContainer from 'common/components/_base/PageContainer';
import Typography from 'common/components/_base/Typography/Typography';
import { RegistrationForm } from 'modules/auth/index';
import { useSession } from 'next-auth/react';

const RegistrationPage = () => {
	const { data } = useSession();

	const handleLogout = () => {};
	return (
		<PageContainer>
			<div className="mx-auto max-w-lg">
				<Button text="logout" />
				<Typography
					variant="2xl"
					color="primaryDark"
					uppercase
					className="my-12 block text-center"
				>
					Регистрация
				</Typography>
				<RegistrationForm />
			</div>
		</PageContainer>
	);
};

export default RegistrationPage;

import ResetPasswordForm from './components/ResetPassword/ResetPassword.form';
import LoginForm from 'modules/auth/components/Login/Login.form';
import RegistrationForm from 'modules/auth/components/Registation/Registration.form';
import * as authService from 'modules/auth/services/Auth.service';
import LoginModal from 'modules/auth/components/Login/LoginModal';
import RegistationPage from 'modules/auth/components/Registation/Registration.page';

export {
	RegistrationForm,
	LoginForm,
	ResetPasswordForm,
	LoginModal,
	RegistationPage,
	authService,
};

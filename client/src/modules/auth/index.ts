import ResetPasswordForm from './components/ResetPassword/ResetPassword.form';
import SignInForm from './components/SignIn/SignIn.form';
import SignUpForm from './components/SignUp/SignUp.form';
import { AuthService } from 'modules/auth/services/Auth.service';
import SignInModal from './components/SignInModal';
import SignUpPage from './components/SignUp.page';

const authService = AuthService.getInstance();

export {
	SignUpForm,
	SignInForm,
	ResetPasswordForm,
	SignInModal,
	SignUpPage,
	authService,
};

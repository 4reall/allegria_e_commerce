import ResetPasswordForm from './components/ResetPassword/ResetPassword.form';
import SignInForm from './components/SignIn/SignIn.form';
import SignUpForm from './components/SignUp/SignUp.form';
import { AuthService } from 'modules/auth/services/AuthService';

const authService = AuthService.getInstance();

export { SignUpForm, SignInForm, ResetPasswordForm, authService };

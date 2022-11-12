import InputField from 'common/components/InputField/InputField';
import Button from 'common/components/_base/Button/Button';
import Typography from 'common/components/_base/Typography/Typography';

const SignInLayout = () => {
	return (
		<>
			<InputField placeholder="E-mail" name="email" className="mt-4" />
			<InputField
				placeholder="Password"
				name="password"
				className={'mt-4'}
				password
			/>
			<Button full className={'mt-4'} type="submit" variant="primary">
				<Typography color="beige" uppercase>
					login
				</Typography>
			</Button>
		</>
	);
};

export default SignInLayout;

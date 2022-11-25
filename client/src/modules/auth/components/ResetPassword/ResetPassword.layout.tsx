import InputField from 'common/components/InputField/InputField';
import Button from 'common/components/_base/Button/Button';
import Typography from 'common/components/_base/Typography/Typography';

const ResetPasswordLayout = () => {
	return (
		<>
			<InputField placeholder="E-mail" name="login" className="mt-4" />
			<Button
				text="Submit"
				full
				className={'mt-4'}
				type="submit"
				variant="primary"
			/>
		</>
	);
};

export default ResetPasswordLayout;

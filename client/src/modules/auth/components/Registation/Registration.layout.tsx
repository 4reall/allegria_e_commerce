import InputField from 'common/components/InputField/InputField';
import CheckboxField from 'common/components/CheckboxField/CheckboxField';
import { useTranslation } from 'next-i18next';
import Typography from 'common/components/_base/Typography/Typography';
import Button from 'common/components/_base/Button/Button';

const RegistrationLayout = () => {
	const { t } = useTranslation('common', { keyPrefix: 'form' });
	return (
		<>
			<InputField placeholder={t('name')} name="name" />
			<InputField placeholder={t('surname')} name="surname" />
			<InputField type="tel" placeholder={t('tel')} name="tel" />
			<InputField placeholder={t('email')} name="email" />
			<InputField password placeholder={t('password')} name="password" />
			<InputField
				password
				placeholder={t('repeatPassword')}
				name="repeatPassword"
			/>
			<CheckboxField
				label={t('mailing')}
				className="col-span-1 sm:col-span-2"
				name={'mailing'}
			/>
			<CheckboxField
				label={
					<>
						{t('agree')}
						<Typography color="accent">{t('policy')}</Typography>
					</>
				}
				className="col-span-1 sm:col-span-2"
				name={'privacy'}
			/>
			<Button type="submit" text="submit" />
		</>
	);
};

export default RegistrationLayout;

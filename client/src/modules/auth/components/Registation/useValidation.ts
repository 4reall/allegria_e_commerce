import { useTranslation } from 'next-i18next';
import { z } from 'zod';

export const useValidation = () => {
	const { t } = useTranslation('common');

	return z
		.object({
			name: z
				.string()
				.trim()
				.min(2, t('errors.min', { min: 2 })),
			surname: z
				.string()
				.trim()
				.min(2, t('errors.max', { max: 2 })),
			email: z.string().email(t('errors.email')),
			password: z.string().min(4, t('errors.min', { min: 4 })),
			repeatPassword: z.string().min(4, t('errors.min', { min: 4 })),
			tel: z.string().min(1, t('errors.tel')),
			mailing: z.boolean(),
			privacy: z
				.boolean()
				.refine((privacy) => privacy, t('errors.required')),
		})
		.refine((data) => data.password === data.repeatPassword, {
			message: t('errors.notEqual'),
			path: ['repeatPassword'],
		});
};

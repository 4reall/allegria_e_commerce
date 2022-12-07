import { ComponentMeta, ComponentStory } from '@storybook/react';
import Typography, {
	TypographyProps,
	TypographySignature,
} from 'common/components/_base/Typography/Typography';

export default {
	title: 'Typography',
	component: Typography,
	argTypes: {
		spacing: {
			variant: ['sm', 'md', 'none'],
		},
		as: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		text: 'String',
		font: 'normal',
		uppercase: false,
		variant: 'lg',
		color: 'primaryDark',
		bold: false,
		spacing: 'none',
	},
};

export const Base = ({ children, ...args }: TypographyProps<'span'>) => (
	<Typography {...args}>{children}</Typography>
);

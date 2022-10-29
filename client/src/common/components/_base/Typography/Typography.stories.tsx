import { ComponentMeta, ComponentStory } from '@storybook/react';
import Typography from 'common/components/_base/Typography/Typography';

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
		type: 'normal',
		uppercase: false,
		variant: 'lg',
		color: 'primaryDark',
		bold: false,
		spacing: 'none',
	},
} as ComponentMeta<typeof Typography>;

export const Base: ComponentStory<typeof Typography> = ({ text, ...args }) => (
	<Typography {...args}>{text}</Typography>
);

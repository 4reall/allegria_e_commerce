import { ComponentMeta, ComponentStory } from '@storybook/react';
import Typography from 'common/components/_base/Typography/Typography';
import Button from 'common/components/_base/Button/Button';

export default {
	title: 'Button',
	component: Button,
	decorators: [],
	args: {
		variant: 'primary',
		disabled: false,
	},
} as ComponentMeta<typeof Button>;

export const Base: ComponentStory<typeof Button> = (args) => {
	return (
		<Button {...args}>
			<Typography
				color={args.variant !== 'outline' ? 'beige' : 'primaryDark'}
				uppercase
			>
				button
			</Typography>
		</Button>
	);
};

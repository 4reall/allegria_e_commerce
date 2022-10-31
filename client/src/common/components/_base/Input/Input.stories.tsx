import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from 'common/components/_base/Input/Input';

export default {
	title: 'Input',
	component: Input,

	args: {
		placeholder: 'password',
		error: false,
		type: 'password',
	},
} as ComponentMeta<typeof Input>;

export const Base: ComponentStory<typeof Input> = (args) => (
	<Input id="input" {...args} />
);

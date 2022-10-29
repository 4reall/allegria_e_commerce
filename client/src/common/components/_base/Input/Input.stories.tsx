import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from 'common/components/_base/Input/Input';

export default {
	title: 'Input',
	component: Input,
	argTypes: {},
	args: {
		placeholder: 'mobile',
	},
} as ComponentMeta<typeof Input>;

export const Base: ComponentStory<typeof Input> = (args) => <Input {...args} />;

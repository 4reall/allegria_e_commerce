import { ComponentMeta, ComponentStory } from '@storybook/react';
import RadioButtons from 'common/components/_base/RadioButtons/RadioButtons';

export default {
	title: 'RadioButtons',
	component: RadioButtons,
	argTypes: {},
	args: {
		options: ['option 1', 'option 2', 'option 3'],
	},
} as ComponentMeta<typeof RadioButtons>;

export const Base: ComponentStory<typeof RadioButtons> = (args) => (
	<RadioButtons {...args} />
);

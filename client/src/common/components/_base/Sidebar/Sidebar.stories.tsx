import { ComponentMeta, ComponentStory } from '@storybook/react';
import Sidebar from 'common/components/_base/Sidebar/Sidebar';
import Button from 'common/components/_base/Button/Button';

export default {
	title: 'Sidebar',
	component: Sidebar,
	argTypes: {},
	args: {
		align: 'left',
	},
} as ComponentMeta<typeof Sidebar>;

export const Base: ComponentStory<typeof Sidebar> = (args) => (
	<Sidebar
		{...args}
		renderTrigger={(open, setOpen) => (
			<Button onClick={() => setOpen(!open)} text="click" />
		)}
	/>
);

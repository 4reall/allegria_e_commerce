import { ComponentMeta, ComponentStory } from '@storybook/react';
import Dropdown from 'common/components/Dropdown/Dropdown';
import Typography from 'common/components/_base/Typography/Typography';

export default {
	title: 'Dropdown',
	component: Dropdown,
	args: {
		triggerLabel: 'Size',
		outline: false,
		borderColor: 'beige',
	},
} as ComponentMeta<typeof Dropdown>;

export const Base: ComponentStory<typeof Dropdown> = (args) => (
	<div className="w-40">
		<Dropdown {...args}>
			<div className="grid grid-cols-3 p-2 gap-2">
				<span className="block bg-primary w-8 h-8" />
				<span className="block bg-primary w-8 h-8" />
				<span className="block bg-primary w-8 h-8" />
				<span className="block bg-primary w-8 h-8" />
				<span className="block bg-primary w-8 h-8" />
			</div>
		</Dropdown>
	</div>
);

import { ComponentMeta, ComponentStory } from '@storybook/react';
import Checkbox from 'common/components/_base/Checkbox/Checkbox';
import Typography from 'common/components/_base/Typography/Typography';

export default {
	title: 'Checkbox',
	component: Checkbox,
	decorators: [],
	args: {
		label: (
			<Typography variant="sm" color="primaryDark">
				Я согласен с{' '}
				<Typography color="accent" variant="sm">
					политикой конфиденциальности
				</Typography>
			</Typography>
		),
	},
} as ComponentMeta<typeof Checkbox>;

export const Base: ComponentStory<typeof Checkbox> = (args) => {
	return <Checkbox label={args.label} />;
};

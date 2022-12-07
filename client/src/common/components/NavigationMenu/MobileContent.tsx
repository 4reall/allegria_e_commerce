import * as NavMenuPrimitive from '@radix-ui/react-navigation-menu';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import cn from 'classnames';
import Accordion from 'common/components/Accordion/Accordion';
import { ContentProps } from 'common/components/NavigationMenu/NavigationMenu';

const MobileContent = ({ navLinks }: ContentProps) => {
	return (
		<NavMenuPrimitive.Content
			className={cn(
				'mx-auto flex h-screen w-screen max-w-[75rem] justify-between px-8'
			)}
		>
			<Accordion linkGroups={navLinks} />
		</NavMenuPrimitive.Content>
	);
};

export default MobileContent;

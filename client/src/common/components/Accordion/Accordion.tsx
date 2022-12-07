import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import AccordionItem from 'common/components/Accordion/AccordionItem';
import { LinkGroup } from 'common/types/Link';

interface CustomAccordionProps {
	linkGroups: LinkGroup[];
}

const Accordion = ({ linkGroups }: CustomAccordionProps) => {
	return (
		<AccordionPrimitive.Root className="w-full" type="single" collapsible>
			{linkGroups.map(({ link, items }, index) => (
				<AccordionItem
					key={index}
					label={link.label}
					items={items}
					index={index}
				/>
			))}
		</AccordionPrimitive.Root>
	);
};

export default Accordion;

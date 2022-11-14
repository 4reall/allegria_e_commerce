import * as AccordionPrimitive from '@radix-ui/react-accordion';
import AccordionItem from 'common/components/Accordion/AccordionItem';

export interface ContentItem {
	title: string;
	content: string[];
}

interface CustomAccordionProps {
	content: ContentItem[];
}

const Accordion = ({ content }: CustomAccordionProps) => {
	return (
		<AccordionPrimitive.Root type="single" collapsible>
			{content.map((contentItem, index) => (
				<AccordionItem key={index} {...contentItem} index={index} />
			))}
		</AccordionPrimitive.Root>
	);
};

export default Accordion;

import * as AccordionR from '@radix-ui/react-accordion';
import { ReactNode } from 'react';

interface ContentItem {
	title: string;
	content: string[];
}

interface CustomAccordionProps {
	renderItem: (item: ContentItem, index: number) => ReactNode;
	content: ContentItem[];
}

const Accordion = ({ content, renderItem }: CustomAccordionProps) => {
	return (
		<AccordionR.Root type="single" collapsible>
			{content.map((item, index) => renderItem(item, index))}
		</AccordionR.Root>
	);
};

export default Accordion;

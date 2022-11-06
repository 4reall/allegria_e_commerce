import * as Accordion from "@radix-ui/react-accordion";
import { ReactNode } from "react";

interface ContentItem {
  title: string;
  content: string[];
}

interface CustomAccordionProps {
  renderItem: (item: ContentItem, index: number) => ReactNode;
  content: ContentItem[];
}

const CustomAccordion = ({
  content,
  renderItem,
}: CustomAccordionProps) => {
  return (
    <Accordion.Root type="single" collapsible>
      {content.map((item, index) => renderItem(item, index))}
    </Accordion.Root>
  );
};

export default CustomAccordion;

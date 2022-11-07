import * as Accordion from "@radix-ui/react-accordion";
import Typography from "../_base/Typography/Typography";
import cn from "classnames";
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

interface ContentItem {
  title: string;
  content: string[];
}

interface AccordionItemProps {
  item: ContentItem;
  index: number;
  isUppercase?: boolean;
}

const AccordionItem = ({
  item,
  index,
  isUppercase = false,
}: AccordionItemProps) => {
  return (
    <Accordion.Item
      value={`item-${index}`}
      className="border-b-[1px] border-beige first-of-type:border-t-[1px] "
    >
      <Accordion.Header>
        <Accordion.Trigger
          className={cn("group", "h-full", "w-full", "py-4 ")}
        >
          <div className=" flex items-center justify-between ">
            <Typography
              bold
              uppercase={isUppercase}
              type="inter"
              color="primaryDark"
            >
              {item.title}
            </Typography>
            <PlusIcon
              width={20}
              height={20}
              className=" text-primary-dark group-radix-state-open:hidden"
            />
            <MinusIcon
              width={20}
              height={20}
              className="text-accent group-radix-state-closed:hidden"
            />
          </div>
        </Accordion.Trigger>
      </Accordion.Header>
      {item.content.map((item, index) => {
        return (
          <Accordion.Content
            key={index}
            className={cn("last-of-type:mb-4", "animate-slide-down")}
          >
            <Typography type="inter">{item}</Typography>
          </Accordion.Content>
        );
      })}
    </Accordion.Item>
  );
};

export default AccordionItem;

import * as Accordion from "@radix-ui/react-accordion";
import Typography from "../_base/Typography/Typography";
import cn from "classnames";
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

interface ContentItem {
  title: string;
  content: string[] | string;
}

const CustomAccordionItem = ({
  item,
  index,
}: {
  item: ContentItem;
  index: number;
}) => {
  return (
    <Accordion.Item
      value={`item-${index}`}
      className="border-b-[1px] border-b-beige"
    >
      <Accordion.Header>
        <Accordion.Trigger
          className={cn("group", "h-full", "w-full", "py-[15px]")}
        >
          <div className=" flex items-center justify-between ">
            <Typography bold uppercase color="primaryDark">
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
        {Array.isArray(item.content) ? (
          item.content.map((item: string, index: number) => {
            return (
              <Accordion.Content
                className={cn("last-of-type:mb-[15px]")}
              >
                {item}
              </Accordion.Content>
            );
          })
        ) : (
          <Accordion.Content>{item.content}</Accordion.Content>
        )}
      </Accordion.Header>
    </Accordion.Item>
  );
};

const CustomAccordion = ({ items }: { items: ContentItem[] }) => {
  return (
    <Accordion.Root type="multiple">
      {items.map((item, index) => (
        <CustomAccordionItem
          item={item}
          index={index}
        ></CustomAccordionItem>
      ))}
    </Accordion.Root>
  );
};

export default CustomAccordion;

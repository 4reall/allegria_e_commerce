import * as Accordion from "@radix-ui/react-accordion";
import Typography from "../_base/Typography/Typography";
import cn from "classnames";

const AccordionMenu = ({ categories }: any) => {
  return (
    <Accordion.Root type="single" collapsible>
      {categories.map((categorie: any, index: number) => (
        <Accordion.Item
          key={index}
          value={`item-${index}`}
          className={cn("border-b-[1px]", "border-beige")}
        >
          <Accordion.Header>
            <Accordion.Trigger className="w-full h-full  py-[15px] group">
              <Typography color="primaryDark" variant="sm" uppercase>
                <div className="flex justify-between">
                  <span className="font-[800]">{categorie.name}</span>
                  <span className="group-radix-state-open:hidden text-primaryDark">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="group-radix-state-closed:hidden text-accent font-[900]">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </div>
              </Typography>
            </Accordion.Trigger>
          </Accordion.Header>

          {categorie.content.map((item: string) => {
            return (
              <Accordion.Content
                className={cn("last-of-type:mb-[15px] ")}
              >
                <Typography
                  variant="sm"
                  color="primaryDark"
                  as="p"
                  className="font-[400]  cursor-pointer hover:text-accent"
                >
                  {item}
                </Typography>
              </Accordion.Content>
            );
          })}
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

export default AccordionMenu;

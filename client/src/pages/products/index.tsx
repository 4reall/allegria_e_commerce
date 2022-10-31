import Typography from "common/components/_base/Typography/Typography";
import cn from "classnames";
import Image from "next/image";
import React, { PropsWithChildren } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import AccordionMenu from "common/components/AccordionMenu/AccordionMenu";

const Container = (props: PropsWithChildren) => {
  return (
    <div className={cn("max-w-[1340px]", "mx-auto", "h-full")}>
      {props.children}
    </div>
  );
};

const FilterItem = (props) => {
  return (
    <span className="w-[35px] h-[35px] border border-beige  hover:border-primary-dark cursor-pointer  grid place-items-center">
      {props.children}
    </span>
  );
};

const DropdownFilter = () => {
  const sizes = ["XS", "S", "M", "L", "XL", "XP"];

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="border-[1px] border-beige w-[185px] py-[8px] px-[15px] text-left group">
        <div className="flex justify-between">
          <Typography variant="sm" color="primaryDark">
            Размер
          </Typography>
          <span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-radix-state-open:rotate-180"
            >
              <path
                d="M4 6H11L7.5 10.5L4 6Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="bg-white border-l-[1px] border-r-[1px] w-[185px] border-r-beige border-l-beige">
          <DropdownMenu.Group className=" pt-[10px] px-[7px] pb-[20px] grid grid-cols-4 gap-[10px]">
            {sizes.map((item) => {
              return (
                <DropdownMenu.CheckboxItem
                  onSelect={(e) => {
                    e.preventDefault();
                  }}
                >
                  <FilterItem>{item}</FilterItem>
                </DropdownMenu.CheckboxItem>
              );
            })}
            <DropdownMenu.Item />
          </DropdownMenu.Group>
          <DropdownMenu.Item>
            <button
              className="bg-primary-dark w-full py-[8px]"
              onClick={(e) => e.preventDefault()}
            >
              <Typography uppercase className="text-beige">
                Применить
              </Typography>
            </button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

const ProductsPage = () => {
  const categories = [
    {
      name: "ОДЕЖДА",
      content: [
        "Свитера толcтовки",
        "Платья юбки",
        "Футболки и топы",
        "Брюки и шорты",
        "Рубашки",
        "Комбинезоны",
        "Леггинсы",
      ],
    },
    {
      name: "Обувь",
      content: ["Кроссовки", "Шлепанцы"],
    },
    {
      name: "СУМКИ",
      content: [
        "Сумки",
        "Рюкзаки",
        "Кроссбоди",
        "Поясные",
        "Спортивные",
        "Шопперы",
      ],
    },
    {
      name: "АКСЕСУАРЫ",
      content: [
        "Головные уборы",
        "Перчатки",
        "Шарфы и платки",
        "Носки",
        "Гетры",
      ],
    },
    {
      name: "БЕЛЬЕ",
      content: ["Разное"],
    },
  ];

  return (
    <>
      <Container>
        <div className={cn("flex gap-[25px]")}>
          <aside className={cn("w-[220px]")}>
            <div className={cn("grid", "grid-cols-2")}>
              <Typography
                uppercase
                variant="sm"
                color="primaryDark"
                className={cn(
                  "text-center",
                  "border-b-[2px]",
                  "border-accent",
                  "font-[400]"
                )}
              >
                женщины
              </Typography>
              <Typography
                uppercase
                variant="sm"
                color="primaryDark"
                className={cn(
                  "text-center",
                  "border-b-[1px]",
                  "border-beige",
                  "font-[400]"
                )}
              >
                МУЖЧИНЫ
              </Typography>
            </div>
            <AccordionMenu categories={categories} />
          </aside>
          <section>
            <Typography
              uppercase
              variant="xl"
              color="primaryDark"
              bold
            >
              Кофти та піджаки
            </Typography>
            <div>
              <span className="mr-5">FILTER</span>
              <DropdownFilter></DropdownFilter>
            </div>
            <div
              className={cn(
                "grid",
                "grid-cols-3",
                "w-[840px]",
                "mx-auto",
                "gap-y-[40px]",
                "gap-x-[15px]"
              )}
            >
              {[1, 2, 3, 4, 4, 4].map((item) => {
                return (
                  <ProductCard
                    image={
                      "https://img.ltwebstatic.com/images3_pi/2022/09/13/1663032958979ccbfa6da1bc07de474805b5858b0e_thumbnail_600x.webp"
                    }
                    brand={"george gina lucy"}
                    name={"Classic shoes"}
                    price={3800}
                  ></ProductCard>
                );
              })}
            </div>
          </section>
        </div>
      </Container>
    </>
  );
};

interface ProductCardProps {
  image: string;
  brand: string;
  name: string;
  price: number;
}

const ProductCard = ({
  image,
  brand,
  name,
  price,
}: ProductCardProps) => {
  return (
    <div
      className={cn(
        "w-full",
        "mx-auto",
        "flex",
        "flex-col",
        "items-center",
        "relative",
        "gap-[15px]"
      )}
    >
      <span
        className={cn(
          "bg-accent",
          "w-[45px]",
          "h-[45px]",
          "rounded-full",
          "flex",
          "justify-center",
          "items-center",
          "absolute",
          "right-[10px]",
          "top-[10px]",
          "text-white"
        )}
      >
        40%
      </span>
      <Image width={270} height={325} src={image} />
      <div
        className={cn(
          "flex",
          "flex-col",
          "items-center",
          "text-primary-dark"
        )}
      >
        <Typography
          color="primaryDark"
          variant="lg"
          type="normal"
          bold
          className={cn("uppercase")}
        >
          {brand}
        </Typography>
        <Typography
          color="primaryDark"
          variant="md"
          className={cn("mt-[1px]")}
        >
          {name}
        </Typography>
        <Typography
          color="primaryDark"
          variant="sm"
          bold
          className={cn("mt-[7px]")}
        >
          {`${price} UAH`}
        </Typography>
      </div>
    </div>
  );
};

export default ProductsPage;

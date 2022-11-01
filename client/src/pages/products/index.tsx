import Typography from "common/components/_base/Typography/Typography";
import cn from "classnames";

import React, { PropsWithChildren } from "react";
import CustomAccordion from "common/components/AccordionMenu/AccordionMenu";
import RoundLabel from "common/components/_base/RoundLabel";
import PageContainer from "common/components/_base/PageContainer";
import ProductCard from "common/components/ProductCard/ProductCard";
import { HeartIcon } from "@radix-ui/react-icons";

export const DummyHeader = () => {
  return (
    <header className="mb-[8px] h-[60px] bg-accent">
      <PageContainer>
        <div className="flex justify-between">
          <span>LOGO</span>
          <span>ICONS</span>
        </div>
      </PageContainer>
    </header>
  );
};

const DummyBread = () => {
  return <div className="mb-[23px] h-[14px] bg-accent"></div>;
};

const DummyFilterSection = () => {
  return <div className="mb-[24px] h-[40px] bg-accent"></div>;
};

const DummyInfoSection = () => {
  return <div className="mb-[18px] h-[24px] bg-accent"></div>;
};

const PRODUCTS = [
  {
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/08/13/1628835748ca6689f27e457e5c43679227513cd395.webp",
    brand: "george gina lucy",
    name: " Classic shoes",
    price: 1200,
  },
  {
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/10/10/16338051716d38e86edbc84ad5f25d875e1dd0c658.webp",
    brand: "george gina lucy",
    name: " Classic shoes",
    price: 1200,
  },
  {
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/08/13/1628835748ca6689f27e457e5c43679227513cd395.webp",
    brand: "george gina lucy",
    name: " Classic shoes",
    price: 1200,
  },
  {
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/08/13/1628835748ca6689f27e457e5c43679227513cd395.webp",
    brand: "george gina lucy",
    name: " Classic shoes",
    price: 1200,
  },
];

const ProductsPage = () => {
  const categories = [
    {
      title: "ОДЕЖДА",
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
      title: "Обувь",
      content: ["Кроссовки", "Шлепанцы"],
    },
    {
      title: "СУМКИ",
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
      title: "АКСЕСУАРЫ",
      content: [
        "Головные уборы",
        "Перчатки",
        "Шарфы и платки",
        "Носки",
        "Гетры",
      ],
    },
    {
      title: "БЕЛЬЕ",
      content: ["Разное"],
    },
  ];

  return (
    <>
      <DummyHeader />
      <DummyBread />
      <PageContainer>
        <div className="flex justify-center gap-[25px]">
          <aside className="hidden h-[440px] w-[220px] lg:block ">
            <CustomAccordion items={categories} />
          </aside>
          <section className="w-[345px]  md:w-[728px] lg:w-[840px]">
            <h2 className="mb-[45px] text-[25px] uppercase">
              Кофты и пиджаки
            </h2>
            <DummyFilterSection />
            <DummyInfoSection />

            <div className="grid grid-cols-2 gap-x-[15px] gap-y-[40px] md:grid-cols-2 lg:grid-cols-3">
              {PRODUCTS.map((item, index) => (
                <ProductCard key={index} {...item}>
                  <RoundLabel className="absolute top-[10px] right-[10px] z-10 text-white">
                    40%
                  </RoundLabel>

                  <RoundLabel
                    color="white"
                    className="absolute bottom-[120px] right-[10px] z-10"
                  >
                    <HeartIcon width={20} height={20} />
                  </RoundLabel>
                </ProductCard>
              ))}
            </div>
          </section>
        </div>
      </PageContainer>
    </>
  );
};

export default ProductsPage;

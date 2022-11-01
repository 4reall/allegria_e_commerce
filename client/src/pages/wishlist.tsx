import ProductCard from "common/components/ProductCard/ProductCard";
import Button from "common/components/_base/Button/Button";
import CloseButton from "common/components/_base/CloseButton";

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

const CartContainer = (props: any) => {
  return (
    <div
      className="flex w-full
  border-b-[1px] border-beige py-[45px] px-[15px] md:px-[20px] md:odd:justify-end md:even:justify-start md:even:border-l-[1px]"
    >
      {props.children}
    </div>
  );
};

const Wishlist = () => {
  return (
    <>
      <div className="h-[60px] border-b-[1px] border-beige"></div>
      <div>
        <div className="mx-auto grid  grid-cols-1 md:grid-cols-2 ">
          {PRODUCTS.map((item) => (
            <CartContainer>
              <ProductCard type={"cart"} {...item}>
                <Button>
                  <span className=" text-[0.7rem] uppercase text-white">
                    добавить в корзину
                  </span>
                </Button>
                <CloseButton className="top-0 right-0" />
              </ProductCard>
            </CartContainer>
          ))}
        </div>
      </div>
      <div className="h-[60px] border-t-[1px] border-beige"></div>
    </>
  );
};

export default Wishlist;

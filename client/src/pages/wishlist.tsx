import CartItemCard from "common/components/CartItemCard/CartItemCard";

const PRODUCTS = [
  {
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/08/13/1628835748ca6689f27e457e5c43679227513cd395.webp",
    brand: "brand",
    name: " Classic shoes",
    price: 1200,
  },
  {
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/08/13/1628835748ca6689f27e457e5c43679227513cd395.webp",
    brand: "brand",
    name: " Classic shoes",
    price: 1200,
  },
  {
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/08/13/1628835748ca6689f27e457e5c43679227513cd395.webp",
    brand: "brand",
    name: " Classic shoes",
    price: 1200,
  },
  {
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/08/13/1628835748ca6689f27e457e5c43679227513cd395.webp",
    brand: "brand",
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
      className="flex w-full border-b-[1px]
  border-beige bg-white py-11 px-10 odd:border-r-[1px] md:odd:justify-end md:even:justify-start"
    >
      {props.children}
    </div>
  );
};

const Wishlist = () => {
  return (
    <div className="mx-auto grid md:grid-cols-2">
      {PRODUCTS.map((item) => {
        return (
          <CartContainer>
            <CartItemCard {...item} />
          </CartContainer>
        );
      })}
    </div>
  );
};

export default Wishlist;

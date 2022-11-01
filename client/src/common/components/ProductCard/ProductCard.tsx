import cn from "classnames";
import Image from "next/image";
import { PropsWithChildren } from "react";
import Typography from "../_base/Typography/Typography";

const ProductCardConfig = {
  type: {
    product: {
      card: cn(
        "w-full",
        "mx-auto",
        "flex",
        "flex-col",
        "items-center",
        "relative",
        "gap-[15px]"
      ),
      image: {
        width: 270,
        height: 325,
      },
    },

    cart: {
      card: "flex relative items-end gap-[25px] h-[190px] w-[385px]",
      image: {
        width: 140,
        height: 170,
      },
    },
  },
};

interface ProductCardProps {
  image: string;
  brand: string;
  name: string;
  price: number;
  type?: keyof typeof ProductCardConfig.type;
}

const ProductCard = ({
  image,
  brand,
  name,
  price,
  type = "product",
  ...props
}: PropsWithChildren<ProductCardProps>) => {
  return (
    <div className={cn(ProductCardConfig.type[type].card)}>
      <div>
        <Image
          width={ProductCardConfig.type[type].image.width}
          height={ProductCardConfig.type[type].image.height}
          src={image}
        />
      </div>

      <div
        className={cn(
          "flex",
          "flex-col",
          type === "cart" ? "items-start" : "items-center",
          "justify-center",
          "text-primary-dark",
          "h-full"
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
        <Typography color="primaryDark" className={cn("mt-[1px]")}>
          {name}
        </Typography>
        <Typography
          color="primaryDark"
          variant="sm"
          bold
          className={cn("mt-[7px] mb-[13px]")}
        >
          {`${price} UAH`}
        </Typography>
        {props.children}
      </div>
    </div>
  );
};

export default ProductCard;

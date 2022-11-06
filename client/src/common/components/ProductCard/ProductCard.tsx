import Image from "next/image";
import React, { ReactNode } from "react";
import Typography from "../_base/Typography/Typography";

interface ProductCardProps {
  image: string;
  brand: string;
  name: string;
  price: number;
  topLabel: ReactNode;
  bottomLabel: ReactNode;
}

const ProductCard = ({
  image,
  brand,
  name,
  price,
  topLabel,
  bottomLabel,
}: ProductCardProps) => {
  return (
    <div>
      <div className="relative">
        {topLabel}
        <Image
          width={270}
          height={325}
          layout="responsive"
          src={image}
        />
        {bottomLabel}
      </div>
      <div className="mt-4 flex flex-col items-center ">
        <Typography color="primaryDark" uppercase bold variant="lg">
          {brand}
        </Typography>
        <Typography color="primaryDark">{name}</Typography>
        <Typography bold color="primaryDark" variant="sm">
          {`${price} UAH`}
        </Typography>
      </div>
    </div>
  );
};

export default ProductCard;

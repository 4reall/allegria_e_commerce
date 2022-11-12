import Image from "next/image";
import CloseButton from "../_base/CloseButton";
import Typography from "../_base/Typography/Typography";

const CartItemCard = ({ image, name, price, brand }: any) => {
  return (
    <div className="relative flex w-full max-w-sm gap-6 bg-white pt-7">
      <Image width={140} height={170} src={image} />
      <div className="flex flex-col  py-4">
        <Typography color="primaryDark" uppercase bold variant="lg">
          {brand}
        </Typography>
        <Typography color="primaryDark">{name}</Typography>
        <div className="mt-4 mb-4 flex gap-1">
          <Typography
            bold
            color="gray"
            className="line-through
"
          >
            {`${price} UAH`}
          </Typography>
          <Typography bold color="accent">
            {`${price} UAH`}
          </Typography>
        </div>
        <div className="grid grid-cols-3 place-items-center bg-accent">
          <span>{"<"}</span>
          <span>{4}</span>
          <span>{">"}</span>
        </div>
      </div>
      <CloseButton className="top-0 right-0" />
    </div>
  );
};

export default CartItemCard;

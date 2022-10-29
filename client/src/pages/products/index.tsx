import Typography from "common/components/Typography";
import cn from "classnames";

const ProductsPage = () => {
  return <ProductCard></ProductCard>;
};

const ProductCard = () => {
  return (
    <div className={cn("border", "w-[270px]", " mx-auto")}>
      <img src="https://images.asos-media.com/products/pullbear-puffer-gilet-in-black/203889528-1-black?$n_320w$&wid=317&fit=constrain" />
      <div
        className={cn(
          "flex",
          "flex-col",
          "items-center text-primary-dark"
        )}
      >
        <Typography color="primaryDark" variant="base" type="normal">
          DEHA
        </Typography>
        <Typography color="primary" variant="md">
          Classic shoes
        </Typography>
        <Typography color={"primary"}>3800 UAH</Typography>
      </div>
    </div>
  );
};

export default ProductsPage;

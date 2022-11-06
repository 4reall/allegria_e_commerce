import { ComponentProps, PropsWithChildren } from "react";
import cn from "classnames";

const labelConfig = {
  accent: "bg-accent [&>*]:!text-beige",
  white: "bg-white [&>*]:!text-primaryDark",
};

interface LabelOwnProps {
  color?: keyof typeof labelConfig;
}

type LabelProps = LabelOwnProps &
  Omit<ComponentProps<"span">, keyof LabelOwnProps>;

const RoundLabel = ({
  children,
  color = "accent",
  className,
  ...props
}: PropsWithChildren<LabelProps>) => {
  return (
    <span
      {...props}
      className={cn(
        labelConfig[color],
        "flex",
        "h-12",
        "w-12 ",
        "items-center",
        "justify-center ",
        "rounded-full",
        "py-3",
        "px-1.5",
        className
      )}
    >
      {children}
    </span>
  );
};

export default RoundLabel;

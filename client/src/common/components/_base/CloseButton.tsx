import { Cross1Icon } from "@radix-ui/react-icons";
import { ComponentProps } from "react";
import cn from "classnames";

interface CloseButtonOwnProps {
  error?: boolean;
}
type CloseButtonProps = CloseButtonOwnProps &
  Omit<ComponentProps<"button">, keyof CloseButtonOwnProps>;

const CloseButton = ({ className, ...props }: CloseButtonProps) => {
  return (
    <button className={cn("absolute", className)} {...props}>
      <Cross1Icon width={20} height={20} />
    </button>
  );
};

export default CloseButton;

import { Cross1Icon } from "@radix-ui/react-icons";
import cn from "classnames";

const CloseButton = ({ className }: any) => {
  return (
    <button className={cn("absolute", className)}>
      <Cross1Icon width={20} height={20} />
    </button>
  );
};

export default CloseButton;

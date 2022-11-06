import { Transition } from "react-transition-group";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import cn from "classnames";
import React, {
  Fragment,
  PropsWithChildren,
  useRef,
  useState,
} from "react";
import CloseButton from "../CloseButton";

interface ModalProps {
  trigger: React.ReactNode;
  closeHandler?: () => void;
  isOpen?: boolean;
  setIsOpen?: () => void;
}

const duration = 300;
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const Modal = ({
  trigger,
  isOpen = undefined,
  setIsOpen = undefined,
  children,
}: PropsWithChildren<ModalProps>) => {
  const [isOpen_, setIsOpen_] = useState(false);
  const nodeRef = useRef(null);

  return (
    <Transition
      nodeRef={nodeRef}
      in={isOpen ? isOpen : isOpen_}
      timeout={duration}
    >
      {(state) => (
        <DialogPrimitive.Root
          open={isOpen ? isOpen : isOpen_}
          onOpenChange={setIsOpen ? setIsOpen : setIsOpen_}
        >
          <DialogPrimitive.Trigger asChild>
            {trigger}
          </DialogPrimitive.Trigger>

          <DialogPrimitive.Portal>
            <DialogPrimitive.Overlay
              forceMount
              className="fixed inset-0 z-20 bg-black/20"
            />
            <DialogPrimitive.Content
              ref={nodeRef}
              className={cn(
                "fixed z-50",
                "h-[100vh] w-[100vw] max-w-lg py-7 px-10 md:h-auto md:w-auto",
                "top-[50%] left-[50%]  -translate-x-[50%] -translate-y-[50%] ",
                " bg-white",
                "border-none",
                { ...defaultStyle },
                { ...transitionStyles }
              )}
            >
              <DialogPrimitive.Description>
                {children}
              </DialogPrimitive.Description>

              <DialogPrimitive.Close>
                <CloseButton className="absolute right-7 top-7" />
              </DialogPrimitive.Close>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        </DialogPrimitive.Root>
      )}
    </Transition>
  );
};

export default Modal;

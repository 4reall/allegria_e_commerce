import { CSSTransition } from 'react-transition-group';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import cn from 'classnames';
import { PropsWithChildren, useState } from 'react';
import CloseButton from '../CloseButton';

interface ModalProps {
	trigger: React.ReactNode;
	closeHandler?: () => void;
	isOpen?: boolean;
	setIsOpen?: () => void;
}

const Modal = ({
	trigger,
	isOpen,
	setIsOpen,
	children,
}: PropsWithChildren<ModalProps>) => {
	const [isOpen_, setIsOpen_] = useState(false);

	const hasIsOpen = isOpen !== undefined;
	const hasSetIsOpen = setIsOpen !== undefined;

	const handleClose = () => setIsOpen_(false);

	return (
		<DialogPrimitive.Root
			open={hasIsOpen ? isOpen : isOpen_}
			onOpenChange={hasSetIsOpen ? setIsOpen : setIsOpen_}
		>
			<DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
			<CSSTransition
				in={hasIsOpen ? isOpen : isOpen_}
				timeout={300}
				classNames={{
					enter: 'opacity-0',
					enterActive: '!opacity-100 duration-200 transition-all',
					enterDone: '!opacity-100',
					exit: 'opacity-100',
					exitActive: '!opacity-0 duration-200 transition-all',
					exitDone: '!opacity-0',
				}}
				mountOnEnter
				unmountOnExit
			>
				<DialogPrimitive.Portal forceMount>
					<div>
						<DialogPrimitive.Overlay
							forceMount
							className="fixed inset-0 z-10 bg-black/40"
						/>
						<DialogPrimitive.Content
							forceMount
							className={cn(
								'fixed z-50 border-none bg-white',
								'h-[100vh] w-[100vw] max-w-lg py-7 px-10 md:h-auto md:w-auto',
								'top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] '
							)}
						>
							{children}
							<DialogPrimitive.Close asChild>
								<CloseButton
									onClick={
										hasSetIsOpen ? setIsOpen : handleClose
									}
									className="absolute right-7 top-7"
								/>
							</DialogPrimitive.Close>
						</DialogPrimitive.Content>
					</div>
				</DialogPrimitive.Portal>
			</CSSTransition>
		</DialogPrimitive.Root>
	);
};

export default Modal;

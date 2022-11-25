import { CSSTransition } from 'react-transition-group';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import cn from 'classnames';
import { PropsWithChildren, ReactNode, useState } from 'react';
import CloseButton from '../CloseButton';

interface ModalProps {
	trigger: ReactNode;
	isOpen?: boolean;
	handleOpenChange?: (open?: boolean) => void;
	className?: string;
}

const DURATION = 300;

const Modal = ({
	trigger,
	isOpen,
	handleOpenChange,
	children,
	className,
}: PropsWithChildren<ModalProps>) => {
	const [isOpen_, setIsOpen_] = useState(false);

	const handleOpenChange_ = (open: boolean) => {
		if (handleOpenChange !== undefined)
			setTimeout(() => handleOpenChange(open), DURATION);
		setIsOpen_(open);
	};

	return (
		<DialogPrimitive.Root
			open={isOpen ?? isOpen_}
			onOpenChange={handleOpenChange_}
		>
			<DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
			<CSSTransition
				in={isOpen ?? isOpen_}
				timeout={DURATION}
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
								'fixed z-50 flex flex-col items-center',
								'justify-center border-none bg-white py-7 px-10',
								'top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ',
								className
							)}
						>
							{children}
							<DialogPrimitive.Close asChild>
								<CloseButton
									onClick={() => handleOpenChange_(false)}
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

import { PropsWithChildren, ReactNode, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Button from 'common/components/_base/Button/Button';
import cn from 'classnames';

const alignMap = {
	left: {
		sidebar: 'top-0 right-0 w-full h-screen sm:w-1/2',
		enter: 'translate-x-full',
		enterActive: '!translate-x-0',
		exit: 'translate-x-0',
		exitActive: '!translate-x-full',
		transition: 'transition-all duration-300',
	},
	bottom: {
		sidebar: 'left-0 bottom-0 min-h-[20rem] w-screen',
		enter: 'translate-y-full',
		enterActive: '!translate-y-0',
		exit: 'translate-y-0',
		exitActive: '!translate-y-full',
		transition: 'transition-all duration-300',
	},
};

interface SidebarProps {
	renderTrigger: (
		open: boolean,
		setOpen: (val: boolean) => void
	) => ReactNode;
	align?: keyof typeof alignMap;
}

const Sidebar = ({
	renderTrigger,
	children,
	align = 'left',
}: PropsWithChildren<SidebarProps>) => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<CSSTransition
				in={open}
				timeout={200}
				classNames={{
					enter: 'opacity-0',
					enterActive: 'transition-all duration-200 !opacity-100',
					exit: 'opacity-100',
					exitActive: 'transition-all duration-200 !opacity-0',
				}}
				unmountOnExit
				mountOnEnter
			>
				<div
					onClick={() => setOpen(false)}
					className="fixed top-0 left-0 z-20 h-screen w-screen bg-black/40"
				/>
			</CSSTransition>
			<CSSTransition
				in={open}
				timeout={300}
				classNames={{
					enter: alignMap[align].enter,
					enterActive: cn(
						alignMap[align].enterActive,
						alignMap[align].transition
					),
					exit: alignMap[align].exit,
					exitActive: cn(
						alignMap[align].exitActive,
						alignMap[align].transition
					),
				}}
				mountOnEnter
				unmountOnExit
			>
				<div
					className={cn(
						'fixed z-30 bg-white',
						alignMap[align].sidebar
					)}
				>
					{children}
				</div>
			</CSSTransition>
			{renderTrigger(open, (val) => setOpen(val))}
		</>
	);
};

export default Sidebar;

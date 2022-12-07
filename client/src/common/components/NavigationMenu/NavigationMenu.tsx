import * as NavMenuPrimitive from '@radix-ui/react-navigation-menu';
import cn from 'classnames';
import SlideIndicator from 'common/components/_base/SlideIndicator';
import Typography from 'common/components/_base/Typography/Typography';
import DesktopContent from 'common/components/NavigationMenu/DesktopContent';
import MobileContent from 'common/components/NavigationMenu/MobileContent';
import { ILink, LinkGroup } from 'common/types/Link';
import { Queries } from 'common/utils/constants/MediaQueries';
import { useRouter } from 'next/router';
import { useMemo, useRef, useState } from 'react';
import { useIsClient, useMediaQuery } from 'usehooks-ts';

interface NavigationMenuProps {
	navLinks: LinkGroup[];
	className: string;
}

export interface ContentProps {
	navLinks: LinkGroup[];
	parentHref: string;
}

const NavigationMenu = ({ navLinks, className }: NavigationMenuProps) => {
	const isMd = useMediaQuery(Queries.up.md);
	const isClient = useIsClient();
	const isTouch = useMediaQuery(Queries.device.touch);
	const router = useRouter();

	const [value, setValue] = useState('');
	const [activeIndex, setActiveIndex] = useState(0);
	const navRef = useRef<HTMLElement>(null);

	const topOffset = useMemo(() => {
		if (navRef.current) {
			console.log(navRef.current.getBoundingClientRect().height);
			return navRef.current.getBoundingClientRect().height;
		}
	}, [navRef.current]);

	const handleValueChange = (value: string) => {
		setValue(value);
	};

	const handleActiveChange = (activeIndex: number) =>
		setActiveIndex(activeIndex);

	const handleClick = (href: string, activeIndex: number) => {
		setActiveIndex(activeIndex);
		const hrefArr = href.split('/');
		const pathArr = router.asPath.split('/');
		if (pathArr[pathArr.length - 1] !== hrefArr[hrefArr.length - 1]) {
			router.push(href);
		}
	};

	return (
		<NavMenuPrimitive.Root
			ref={navRef}
			onValueChange={handleValueChange}
			className={cn('relative w-full select-none', className)}
			delayDuration={100}
		>
			<SlideIndicator
				activeIndex={activeIndex}
				totalItems={Object.keys(navLinks).length}
				show={!!value}
				className={cn('bg-accent bottom-0')}
			/>
			<NavMenuPrimitive.List className="flex">
				{navLinks.map(({ link, items }, i) => (
					<NavMenuPrimitive.Item
						value={link.label}
						key={link.label}
						className="flex flex-grow justify-center"
					>
						<NavMenuPrimitive.Trigger asChild>
							<Typography
								variant="lg"
								color="primaryDark"
								font="avenir"
								uppercase
								spacing="sm"
								className="group block flex-grow py-4 px-6 text-center"
								onClick={() => handleClick(link.href, i)}
								onTouchStart={() => handleClick(link.href, i)}
								onMouseEnter={() =>
									!isTouch ? handleActiveChange(i) : null
								}
							>
								{link.label}
							</Typography>
						</NavMenuPrimitive.Trigger>
						{isMd && isClient ? (
							<DesktopContent
								parentHref={link.href}
								navLinks={items}
							/>
						) : (
							<MobileContent
								parentHref={link.href}
								navLinks={items}
							/>
						)}
					</NavMenuPrimitive.Item>
				))}
			</NavMenuPrimitive.List>
			<NavMenuPrimitive.Viewport
				style={{
					top: topOffset,
				}}
				className={cn(
					'fixed left-0 top-0 flex w-screen justify-between overflow-hidden bg-white',
					'border-beige border-b-2',
					'radix-state-open:animate-slide-down-nav',
					'radix-state-closed:animate-slide-up-nav'
				)}
			/>
		</NavMenuPrimitive.Root>
	);
};

export default NavigationMenu;

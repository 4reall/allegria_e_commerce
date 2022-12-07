import { Separator } from '@radix-ui/react-separator';
import cn from 'classnames';
import Logo from 'public/assets/icons/allegria-logo.svg';
import NavigationMenu from 'common/components/NavigationMenu/NavigationMenu';
import { LinkGroup } from 'common/types/Link';

interface HeaderProps {
	navLinks: LinkGroup[];
}

const Header = ({ navLinks }: HeaderProps) => {
	return (
		<header
			className={cn(
				'fixed top-0 left-0 z-50 flex w-full bg-white px-8',
				'grid grid-cols-12 items-center'
			)}
		>
			<Logo className="col-span-2" />
			<Separator className="bg-beige absolute bottom-0 h-[2px] w-full" />
			<NavigationMenu className="col-span-4" navLinks={navLinks} />
		</header>
	);
};

export default Header;

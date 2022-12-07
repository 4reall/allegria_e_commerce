import * as NavMenuPrimitive from '@radix-ui/react-navigation-menu';
import cn from 'classnames';
import Typography from 'common/components/_base/Typography/Typography';
import { ContentProps } from 'common/components/NavigationMenu/NavigationMenu';
import Link from 'next/link';

const DesktopContent = ({ navLinks, parentHref }: ContentProps) => {
	return (
		<NavMenuPrimitive.Content
			className={cn(
				'mx-auto flex w-full max-w-[75rem] justify-between px-8'
			)}
		>
			{navLinks.map(({ link, items }, i) => (
				<div
					key={link.label + i}
					className={cn(
						'border-l-beige border-l-2 first-of-type:border-l-0',
						'flex flex-grow flex-col items-center py-12'
					)}
				>
					<Link href={`${parentHref}${link.href}`}>
						<Typography
							as="a"
							variant="lg"
							font="avenir"
							bold
							uppercase
						>
							{link.label}
						</Typography>
					</Link>
					<ul
						key={i}
						className="mt-8 flex w-fit flex-col items-start"
					>
						{items.map(({ link: { href, label } }, i) => (
							<li key={href + i}>
								<Link href={`${parentHref}${link.href}${href}`}>
									<NavMenuPrimitive.Link asChild>
										<a className="group block flex h-full w-full items-center justify-center">
											<span
												className={cn(
													'bg-accent h-1 w-1 transition-opacity duration-150',
													'translate-x-2 rounded-full opacity-0 group-hover:opacity-100'
													// 'group-hover:-translate-x-4'
												)}
											/>
											<Typography
												className={cn(
													'md:group-hover:text-accent text-center',
													'transition-all duration-200 group-hover:translate-x-4'
												)}
											>
												{label}
											</Typography>
										</a>
									</NavMenuPrimitive.Link>
								</Link>
							</li>
						))}
					</ul>
				</div>
			))}
		</NavMenuPrimitive.Content>
	);
};

export default DesktopContent;

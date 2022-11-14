import ColorLabel from 'common/components/_base/ColorLabel';
import Dropdown from 'common/components/_base/Dropdown/Dropdown';
import Typography from 'common/components/_base/Typography/Typography';
import ScrollArea from 'common/components/_base/ScrollArea/ScrollArea';
import cn from 'classnames';
import { useUrl } from 'modules/products/hooks/useUrl';
import { IProductsInfo } from 'common/types/Product';

enum FiltersEnum {
	BRANDS = 'brands',
	COLORS = 'colors',
	SIZES = 'sizes',
}

const sizes = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'];

type FiltersProps = Omit<IProductsInfo, 'categories'>;

const Filters = ({ brands, colors }: FiltersProps) => {
	const { handleQueryChange, isUrlContains } = useUrl();
	return (
		<div className="z-10 grid grid-cols-4">
			<Dropdown triggerLabel="Colors">
				<div className="grid grid-cols-5 gap-2 bg-white p-4">
					{colors.map((color, i) => (
						<ColorLabel
							key={i}
							onClick={() =>
								handleQueryChange(
									FiltersEnum.COLORS,
									color.name
								)
							}
							isActive={isUrlContains(
								FiltersEnum.COLORS,
								color.name
							)}
							color={color.hex}
						/>
					))}
				</div>
			</Dropdown>
			<Dropdown triggerLabel="Brands">
				<ScrollArea height={200}>
					<div className="grid h-full grid-cols-1 bg-white">
						{brands.map((brand) => (
							<Typography
								key={brand}
								className={cn(
									'block px-4 py-2 md:hover:bg-black/[3%]'
								)}
								variant="sm"
								onClick={() =>
									handleQueryChange(FiltersEnum.BRANDS, brand)
								}
							>
								{brand}
							</Typography>
						))}
					</div>
				</ScrollArea>
			</Dropdown>
			<Dropdown triggerLabel="Sizes">
				<div className="grid grid-cols-4 gap-2 bg-white p-4">
					{sizes.map((size) => (
						<Typography
							key={size}
							uppercase
							onClick={() =>
								handleQueryChange(FiltersEnum.SIZES, size)
							}
							className={cn(
								'border-primary-dark flex h-8 w-8 cursor-pointer',
								'items-center justify-center border-[1px] p-2',
								isUrlContains(FiltersEnum.SIZES, size)
									? 'bg-primary-dark text-beige'
									: ''
							)}
						>
							{size}
						</Typography>
					))}
				</div>
			</Dropdown>
		</div>
	);
};

export default Filters;

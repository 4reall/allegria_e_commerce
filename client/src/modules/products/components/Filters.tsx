import ColorLabel from 'common/components/_base/ColorLabel';
import Dropdown from 'common/components/_base/Dropdown/Dropdown';
import Select from 'common/components/_base/Select/Select';
import Typography from 'common/components/_base/Typography/Typography';
import ScrollArea from 'common/components/_base/ScrollArea/ScrollArea';
import cn from 'classnames';
import { useUrl } from 'modules/products/hooks/useUrl';
import { IProductsInfo } from 'common/types/Product';
import { useTranslation } from 'next-i18next';
import React, { useEffect, useMemo, useState } from 'react';

enum FiltersEnum {
	BRANDS = 'brands',
	COLORS = 'colors',
	SIZES = 'sizes',
}

const sizes = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'];

interface FiltersOwnProps {
	totalCount?: number;
}

type FiltersProps = Omit<FiltersOwnProps & IProductsInfo, 'categories'>;

const sortConfig = {
	new: { sortBy: 'relevance', orderBy: '1' },
	lowHigh: { sortBy: 'price', orderBy: '1' },
	highLow: { sortBy: 'price', orderBy: '-1' },
};

type SortKeys = keyof typeof sortConfig;

const Filters = ({ brands, colors, totalCount }: FiltersProps) => {
	const [selectedSort, setSelectedSort] = useState<SortKeys>('new');
	const { handleQueryChange, isUrlContains, setQueryObject } = useUrl();
	const { t, i18n } = useTranslation('products');

	const orderOptions = useMemo(() => {
		const names = Object.entries(
			t('filters.sortBy', { returnObjects: true })
		);
		return names.map((entry) => ({ name: entry[1], value: entry[0] }));
	}, [i18n.language]);

	useEffect(() => {
		const sortOption = sortConfig[selectedSort];
		setQueryObject(sortOption);
	}, [selectedSort]);

	return (
		<>
			<div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
				<Dropdown triggerLabel="Colors" className="z-30">
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
				<Dropdown triggerLabel="Brands" className="z-30">
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
										handleQueryChange(
											FiltersEnum.BRANDS,
											brand
										)
									}
								>
									{brand}
								</Typography>
							))}
						</div>
					</ScrollArea>
				</Dropdown>
				<Dropdown triggerLabel="Sizes" className="z-30">
					<div className="grid grid-cols-4 gap-2 bg-white p-4">
						{sizes.map((size) => (
							<Typography
								key={size}
								uppercase
								color={
									isUrlContains(FiltersEnum.SIZES, size)
										? 'beige'
										: 'primary'
								}
								onClick={() =>
									handleQueryChange(FiltersEnum.SIZES, size)
								}
								className={cn(
									'border-primary-dark flex h-8 w-8 cursor-pointer',
									'items-center justify-center border-[1px] p-2',
									isUrlContains(FiltersEnum.SIZES, size) &&
										'bg-primary-dark'
								)}
							>
								{size}
							</Typography>
						))}
					</div>
				</Dropdown>
			</div>
			<div className="flex items-center justify-between py-5">
				<Typography variant="sm" color="gray" className="block">
					{totalCount || 0} товаров
				</Typography>
				<Select
					options={orderOptions}
					onValueChange={(value) =>
						setSelectedSort(value as SortKeys)
					}
				/>
			</div>
		</>
	);
};

export default Filters;

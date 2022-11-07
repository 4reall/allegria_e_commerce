import Typography from 'common/components/_base/Typography/Typography';
import React from 'react';
import Accordion from 'common/components/Accordion/Accordion';
import RoundLabel from 'common/components/_base/RoundLabel';
import PageContainer from 'common/components/_base/PageContainer';
import ProductCard from 'common/components/ProductCard/ProductCard';
import { HeartIcon } from '@radix-ui/react-icons';
import AccordionItem from 'common/components/Accordion/AccordionItem';

export const DummyHeader = () => {
	return (
		<header className="bg-accent mb-[8px] h-[60px]">
			<PageContainer>
				<div className="flex justify-between">
					<span>LOGO</span>
					<span>ICONS</span>
				</div>
			</PageContainer>
		</header>
	);
};

const DummyBread = () => {
	return <div className="bg-accent mb-[23px] h-[14px]"></div>;
};

const DummyFilterSection = () => {
	return <div className="bg-accent mb-[24px] h-[40px]"></div>;
};

const DummyInfoSection = () => {
	return <div className="bg-accent mb-[18px] h-[24px]"></div>;
};

const PRODUCTS = [
	{
		image: 'https://img.ltwebstatic.com/images3_pi/2021/08/13/1628835748ca6689f27e457e5c43679227513cd395.webp',
		brand: 'george gina lucy',
		name: ' Classic shoes',
		price: 1200,
	},
	{
		image: 'https://img.ltwebstatic.com/images3_pi/2021/10/10/16338051716d38e86edbc84ad5f25d875e1dd0c658.webp',
		brand: 'george gina lucy',
		name: ' Classic shoes',
		price: 1200,
	},
	{
		image: 'https://img.ltwebstatic.com/images3_pi/2021/08/13/1628835748ca6689f27e457e5c43679227513cd395.webp',
		brand: 'george gina lucy',
		name: ' Classic shoes',
		price: 1200,
	},
	{
		image: 'https://img.ltwebstatic.com/images3_pi/2021/08/13/1628835748ca6689f27e457e5c43679227513cd395.webp',
		brand: 'george gina lucy',
		name: ' Classic shoes',
		price: 1200,
	},
];

const ProductsPage = () => {
	const categories = [
		{
			title: 'ОДЕЖДА',
			content: [
				'Свитера толcтовки',
				'Платья юбки',
				'Футболки и топы',
				'Брюки и шорты',
				'Рубашки',
				'Комбинезоны',
				'Леггинсы',
			],
		},
		{
			title: 'Обувь',
			content: ['Кроссовки', 'Шлепанцы'],
		},
		{
			title: 'СУМКИ',
			content: [
				'Сумки',
				'Рюкзаки',
				'Кроссбоди',
				'Поясные',
				'Спортивные',
				'Шопперы',
			],
		},
		{
			title: 'АКСЕСУАРЫ',
			content: [
				'Головные уборы',
				'Перчатки',
				'Шарфы и платки',
				'Носки',
				'Гетры',
			],
		},
		{
			title: 'БЕЛЬЕ',
			content: ['Разное'],
		},
	];

	return (
		<>
			<DummyHeader />
			<DummyBread />
			<PageContainer>
				<div className="flex justify-center gap-6">
					<aside className="hidden  w-1/6 lg:block ">
						<Accordion
							content={categories}
							renderItem={(item, index) => (
								<AccordionItem
									item={item}
									index={index}
									isUppercase={true}
								/>
							)}
						/>
					</aside>
					<section className="w-full max-w-4xl">
						<Typography
							as="h2"
							uppercase
							className="mb-11"
							variant="2xl"
						>
							Кофты и пиджаки
						</Typography>
						<DummyFilterSection />
						<DummyInfoSection />

						<div className="xs:grid-cols-2 grid grid-cols-1 gap-x-3.5 gap-y-10 md:grid-cols-3 lg:grid-cols-3">
							{PRODUCTS.map((item, index) => (
								<ProductCard
									key={index}
									{...item}
									topLabel={
										<RoundLabel className="absolute top-2.5 right-2.5 z-10 text-white">
											40%
										</RoundLabel>
									}
									bottomLabel={
										<RoundLabel
											color="white"
											className="absolute bottom-2.5 right-2.5 z-10"
										>
											<HeartIcon width={20} height={20} />
										</RoundLabel>
									}
								/>
							))}
						</div>
					</section>
				</div>
			</PageContainer>
		</>
	);
};

export default ProductsPage;

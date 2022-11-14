export enum Relevance {
	OLD = 'old',
	NEW = 'new',
}

export interface IPrice {
	currencyIso: string;
	value: number;
	salePercent?: number;
}

export interface IColor {
	name: string;
	hex: string;
}

export interface IVariant {
	color: IColor;
	size: string;
	stock: number;
}

export interface IProduct {
	_id: string;
	imagesUrls: string[];
	thumbnailsUrls: string[];
	name: string;
	category: string;
	sex: string;
	price: IPrice;
	relevance: Relevance;
	brand: string;
	variants: IVariant[];
}

export interface IProductsInfo {
	categories: IProduct['category'][];
	brands: IProduct['brand'][];
	colors: IColor[];
}
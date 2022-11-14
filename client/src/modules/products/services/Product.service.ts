import { AxiosError, AxiosResponse } from 'axios';
import { IProduct, IProductsInfo } from 'common/types/Product';
import axiosClient from 'common/configs/axios';
import { Sizes } from 'common/utils/constants/Sizes';

interface GetProductsProps {
	readonly sizes?: Sizes[];
	readonly orderBy?: '1' | '-1' | 'asc' | 'desc';
	readonly relevance?: string;
	readonly price?: number[];
	readonly colors?: string;
	readonly q?: string;
	readonly page?: number;
	readonly limit?: number;
}

interface GetProductsResponse {
	totalCount: string;
	products: IProduct[];
}

class ProductService {
	async getInfo(): Promise<AxiosResponse<IProductsInfo>> {
		try {
			return axiosClient.get('products/info');
		} catch (e) {
			console.log(e);
			throw e;
		}
	}
	async getProducts(
		props?: GetProductsProps
	): Promise<AxiosResponse<GetProductsResponse>> {
		try {
			return axiosClient.get('products', { params: props });
		} catch (e) {
			console.log(e);
			throw e;
		}
	}
}

export default new ProductService();

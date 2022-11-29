import { IProduct } from 'common/types/Product';

export interface IUserBase {
	_id: string;
	email: string;
	password: string;
	isActivated: boolean;
	roles: string[];
	name: string;
	surname: string;
	tel: string;
	address: string;
}

export interface IUser extends IUserBase {
	// orders: Order[];
	wishList: IProduct[];
	cart: IProduct[];
}

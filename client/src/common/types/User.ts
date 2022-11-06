import { IProduct } from 'common/types/Product';

export interface IUser {
	_id: string;
	email: string;
	password: string;
	isActivated: boolean;
	activationLink: string;
	roles: string[];
	name: string;
	surname: string;
	tel: string;
	// orders: Order[];
	address: string;
	wishList: IProduct[];
	cart: IProduct[];
	mailingSubscription: boolean;
}

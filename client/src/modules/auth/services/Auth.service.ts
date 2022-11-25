import { AxiosResponse } from 'axios';
import axios from 'common/configs/axios';
import { IUser } from 'common/types/User';

interface SignIn {
	email: string;
	password: string;
}

type SignUpProps = Pick<
	IUser,
	'surname' | 'name' | 'mailing' | 'tel' | 'email'
> & { password: string };

interface BaseResponse {
	user: IUser;
	accessToken: string;
	refreshToken: string;
}

export class AuthService {
	private static _instance: AuthService | null = null;

	static getInstance() {
		if (this._instance === null) this._instance = new AuthService();
		return this._instance;
	}
	async signUp(props: SignUpProps): Promise<AxiosResponse<BaseResponse>> {
		try {
			return axios.post<BaseResponse>('/registration', props, {
				withCredentials: true,
			});
		} catch (e) {
			console.log(e);
			throw e;
		}
	}
	async signIn(props: SignIn): Promise<AxiosResponse<BaseResponse>> {
		try {
			return axios.post<BaseResponse>('/login', props, {
				withCredentials: true,
			});
		} catch (e) {
			console.log(e);
			throw e;
		}
	}

	async signOut(): Promise<AxiosResponse<{ message: string }>> {
		try {
			return axios.get('/logout', {
				withCredentials: true,
			});
		} catch (e) {
			console.log(e);
			throw e;
		}
	}

	async refreshAccessToken(
		refreshToken: string
	): Promise<AxiosResponse<BaseResponse>> {
		try {
			return axios.post<BaseResponse>(
				'/refresh',
				{ refreshToken },
				{ withCredentials: true }
			);
		} catch (e) {
			console.log(e);
			throw e;
		}
	}
}

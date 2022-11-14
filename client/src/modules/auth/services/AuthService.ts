import { AxiosResponse } from 'axios';
import axios from 'common/configs/axios';
import { IUser } from 'common/types/User';

interface LoginProps {
	email: string;
	password: string;
}

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

	async login(props: LoginProps): Promise<AxiosResponse<BaseResponse>> {
		try {
			return axios.post<BaseResponse>('/login', props, {
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

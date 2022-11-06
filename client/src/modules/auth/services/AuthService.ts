import { IUser } from 'common/models/User';
import { AxiosError, AxiosResponse } from 'axios';
import axios from 'common/configs/axios';

export interface LoginProps {
	email: string;
	password: string;
}

interface BaseResponse {
	user: IUser;
	accessToken: string;
	refreshToken: string;
}

class AuthService {
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

export const authService = new AuthService();

import { IUser } from 'common/models/User';
import { AxiosError, AxiosResponse } from 'axios';
import axios from 'common/configs/axios';

export interface LoginProps {
	email: string;
	password: string;
}

interface LoginResponse {
	user: IUser;
	accessToken: string;
}

class AuthService {
	async login(props: LoginProps): Promise<AxiosResponse<LoginResponse>> {
		try {
			return axios.post<LoginResponse>('/login', props, {
				withCredentials: true,
			});
		} catch (e) {
			console.log(e);
			throw e;
		}
	}
	async refreshAccessToken(
		refreshToken: string
	): Promise<AxiosResponse<LoginResponse>> {
		try {
			return axios.post<LoginResponse>(
				'/refresh',
				{ refreshToken },
				{
					withCredentials: true,
				}
			);
		} catch (e) {
			console.log(e);
			throw e;
		}
	}
}

export const authService = new AuthService();

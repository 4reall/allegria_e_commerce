import { AxiosResponse } from 'axios';
import axios from 'common/configs/axios';
import { IUser, IUserBase } from 'common/types/User';

interface SignInProps {
	email: string;
	password: string;
}

type SignUpProps = Pick<IUser, 'surname' | 'name' | 'tel' | 'email'> & {
	password: string;
	mailing: boolean;
};

interface BaseResponse {
	user: IUserBase;
	accessToken: string;
}

interface FullResponse {
	refreshToken: string;
}

export const registration = (
	props: SignUpProps
): Promise<AxiosResponse<BaseResponse>> => {
	try {
		return axios.post<BaseResponse>('/registration', props, {
			withCredentials: true,
		});
	} catch (e) {
		console.log(e);
		throw e;
	}
};
export const login = (
	props: SignInProps
): Promise<AxiosResponse<FullResponse>> => {
	try {
		return axios.post<FullResponse>('/login', props, {
			withCredentials: true,
		});
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const logout = (
	refreshToken: string
): Promise<AxiosResponse<{ message: string }>> => {
	try {
		return axios.get(`/logout/${refreshToken}`, {
			withCredentials: true,
		});
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const refreshAccessToken = (
	refreshToken: string
): Promise<AxiosResponse<BaseResponse>> => {
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
};

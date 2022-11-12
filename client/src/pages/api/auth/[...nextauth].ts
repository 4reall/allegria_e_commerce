import NextAuth, {
	CallbacksOptions,
	Session,
	SessionOptions,
	User,
} from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authService } from 'modules/auth/services/AuthService';
import { JWT, JWTOptions } from 'next-auth/jwt';
import { IUser } from 'common/models/User';
import { ErrorType } from 'next-auth/core/pages/error';
import { AxiosError } from 'axios';

interface JWTParams {
	token: JWT;
	user: User;
}
interface SessionParams {
	session: Session;
	token: JWT;
}

export const authOptions = {
	providers: [
		Credentials({
			name: 'login',
			credentials: {
				email: { type: 'text' },
				password: { type: 'password' },
			},

			async authorize(credentials) {
				try {
					const response = await authService.login(credentials!);

					const user = response.data as User;

					if (user) {
						return user;
					}
					return null;
				} catch (e) {
					console.log(e);
					return null;
				}
			},
		}),
	],
	secret: process.env.NEXTAUTH_URL,
	callbacks: {
		async jwt({ token, user }: JWTParams) {
			if (user) {
				return {
					accessToken: user.accessToken,
					accessTokenExpires: Date.now() + 15 * 1000,
					user: user.user,
					refreshToken: user.refreshToken,
				};
			}
			if (Date.now() < token.accessTokenExpires) {
				return token;
			}

			const response = await authService.refreshAccessToken(
				token.refreshToken
			);

			return {
				accessToken: response.data.accessToken,
				user: response.data.user,
				accessTokenExpires: Date.now() + 15 * 1000,
				refreshToken: response.data.refreshToken,
			};
		},

		async session({ session, token }: SessionParams) {
			session.user = token.user;
			session.accessToken = token.accessToken;
			return session;
		},
	},
};

// @ts-ignore
export default NextAuth(authOptions);

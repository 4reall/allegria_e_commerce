import NextAuth, { Session, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authService } from 'modules/auth/services/AuthService';

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

					const user = response.data;
					console.log('auth\n', user);
					if (user) {
						return user;
					}
					return null;
				} catch (e) {
					const errorMessage = e.response.data.message;
					throw new Error(
						errorMessage + '&email=' + credentials.email
					);
				}
			},
		}),
	],
	secret: process.env.NEXTAUTH_URL,
	// pages: {
	// 	signIn: '/login',
	// },
	callbacks: {
		async jwt({ token, user }) {
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

		async session({ session, token }) {
			session.user = token.user;
			session.accessToken = token.accessToken;
			return session;
		},
	},
};

// @ts-ignore
export default NextAuth(authOptions);

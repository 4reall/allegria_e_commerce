import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { NextAuthOptions, Session, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { JWT } from 'next-auth/jwt';
import { authService } from 'modules/auth';

interface JWTParams {
	token: JWT;
	user?: User;
}
interface SessionParams {
	session: Session;
	token: JWT;
}

type NextAuthOptionsCallback = (
	req: NextApiRequest,
	res: NextApiResponse
) => NextAuthOptions;

export const nextAuthOptions: NextAuthOptionsCallback = (req, res) => ({
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
	events: {
		async signOut({ token }: SessionParams) {
			const response = await authService.logout(token.refreshToken);
			console.log(response);
		},
	},
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
				refreshToken: token.refreshToken,
			};
		},

		async session({ session, token }: SessionParams) {
			session.user = token.user;
			session.accessToken = token.accessToken;
			return session;
		},
	},
});

export default (req: NextApiRequest, res: NextApiResponse) => {
	return NextAuth(req, res, nextAuthOptions(req, res));
};

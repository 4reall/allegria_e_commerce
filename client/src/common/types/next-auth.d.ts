import { AdapterUser } from 'next-auth/adapters';
import { JWT } from 'next-auth/jwt';
import { User } from 'next-auth/core/types';
import { CredentialInput } from 'next-auth/providers';
import { Runtime } from 'inspector';

declare module 'next-auth' {
	import { IUser } from 'common/models/User';
	import { DefaultSession, DefaultUser } from 'next-auth';

	// interface User extends DefaultUser {
	// 	user: {
	// 		user: IUser;
	// 		accessToken: string;
	// 		refreshToken: string;
	// 	};
	// }
	// interface SessionParams {
	// 	session: Session;
	// 	user: User | AdapterUser;
	// 	token: JWT;
	// }
	// interface JWTParams {
	// 	token: JWT;
	// 	user?: User | AdapterUser;
	// 	account?: A | null;
	// 	profile?: P;
	// 	isNewUser?: boolean;
	// }
	// interface Login {
	// 	user: User | AdapterUser;
	// 	account: A | null;
	// 	profile?: P;
	// 	email?: {
	// 		verificationRequest?: boolean;
	// 	};
	// 	credentials?: Record<string, CredentialInput>;
	// }
	interface User {
		user: IUser;
		refreshToken: string;
		accessToken: string;
	}

	interface Session extends DefaultSession {
		accessToken: string;
		user: IUser;
	}
}
declare module 'next-auth/jwt' {
	import { IUser } from 'common/models/User';

	interface JWT {
		refreshToken: string;
		accessToken: string;
		user: IUser;
		accessTokenExpires: number;
	}
}

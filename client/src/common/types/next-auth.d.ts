// declare module 'next-auth' {
// 	import { IUser } from 'common/models/User';
// 	import { JWTPayload } from 'common/models/JWTPayload';
// 	import { DefaultSession } from 'next-auth';

// interface User {
// 	user: IUser;
// 	accessToken: JWTPayload;
// }
// interface Session {
// 	session: {
// 		accessToken: JWTPayload;
// 		user: IUser;
// 	};
// 	token: {
// 		accessToken: JWTPayload;
// 		user: IUser;
// 	};
// }
// }
export {};
// declare module 'next-auth/jwt' {
// 	import { JWTPayload } from 'common/models/JWTPayload';
// 	import { IUser } from 'common/models/User';
// 	import { JWTOptions } from 'next-auth/jwt';

/** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
// interface JWT {
// 	token: JWTPayload;
// 	user: IUser;
// }
// }

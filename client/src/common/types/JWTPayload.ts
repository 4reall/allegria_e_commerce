export interface JWTPayload {
	roles: string[];
	userId: string;
	isActivated: boolean;
}

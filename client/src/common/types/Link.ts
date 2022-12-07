export interface ILink {
	href: string;
	label: string;
}

export type LinkGroup = { link: ILink; items: LinkGroup[] };

export enum BreakpointEnum {
	xs = '20em',
	sm = '35em',
	md = '48em',
	lg = '62em',
	xl = '75em',
	xxl = '90em',
}

export const Queries = {
	down: {
		xs: `(max-width: ${BreakpointEnum.xs})`,
		sm: `(max-width: ${BreakpointEnum.sm})`,
		md: `(max-width: ${BreakpointEnum.md})`,
		lg: `(max-width: ${BreakpointEnum.lg})`,
		xl: `(max-width: ${BreakpointEnum.xl})`,
		xxl: `(max-width: ${BreakpointEnum.xxl})`,
	} as const,
	up: {
		xs: `(min-width: ${BreakpointEnum.xs})`,
		sm: `(min-width: ${BreakpointEnum.sm})`,
		md: `(min-width: ${BreakpointEnum.md})`,
		lg: `(min-width: ${BreakpointEnum.lg})`,
		xl: `(min-width: ${BreakpointEnum.xl})`,
		xxl: `(min-width: ${BreakpointEnum.xxl})`,
	} as const,
	device: {
		touch: `(hover: none) and (pointer: coarse)`,
	} as const,
};

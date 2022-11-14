import cn from 'classnames';
import { PropsWithChildren } from 'react';

const PageContainer = ({ children }: PropsWithChildren<{}>) => {
	return (
		<div className={cn('mx-auto w-full px-4 md:px-5 lg:px-12')}>
			{children}
		</div>
	);
};

export default PageContainer;

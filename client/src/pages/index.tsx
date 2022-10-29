import type { NextPage } from 'next';
import Typography from 'common/components/_base/Typography/Typography';
import cn from 'classnames';
import Input from 'common/components/_base/Input/Input';

const Home: NextPage = () => {
	return (
		<div className="text-6xl text-blue-500">
			<Input align="start" />
		</div>
	);
};

export default Home;

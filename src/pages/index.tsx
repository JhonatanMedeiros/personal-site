import type { NextPage } from 'next';
import Header from '../components/Header';
import Home from '../components/Home';

const PageIndex: NextPage = () => {
	return (
		<>
			<Header />
			<Home />
		</>
	);
};

export default PageIndex;

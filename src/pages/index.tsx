import type { NextPage } from 'next';
import Header from '../components/Header';
import Home from '../components/Home';
import Seo from '../components/Seo';

const PageIndex: NextPage = () => {
	return (
		<>
			<Seo title="Início" />
			<Header />
			<Home />
		</>
	);
};

export default PageIndex;
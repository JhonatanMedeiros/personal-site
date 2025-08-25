import { motion } from 'framer-motion';
import Header from './Header';
import Seo from './Seo';

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.2,
		},
	},
};



const PageWrapper = ({ children, title, description }) => {
	return (
		<>
			<Seo title={title} description={description} />
			<Header />
			<div className="min-h-screen bg-gray-50 dark:bg-gray-800 pt-24">
				<motion.div
					className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					{children}
				</motion.div>
			</div>
		</>
	);
};

export default PageWrapper;

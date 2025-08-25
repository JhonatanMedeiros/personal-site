import PageWrapper from './PageWrapper';
import { motion } from 'framer-motion';

const itemVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: { y: 0, opacity: 1 },
};


const ComingSoon = ({ title }: { title: string }) => {
	return (
		<PageWrapper>
			<div className="max-w-4xl mx-auto text-center">
				<motion.h1 variants={itemVariants} className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">{title}</motion.h1>
				<motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300">Em breve...</motion.p>
			</div>
		</PageWrapper>
	);
};

export default ComingSoon;

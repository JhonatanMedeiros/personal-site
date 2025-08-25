import Image from 'next/image';
import PageWrapper from '../components/PageWrapper';
import { aboutData, personalData } from '../data/data';
import { motion } from 'framer-motion';

const itemVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: { y: 0, opacity: 1 },
};


const About = () => {
	return (
		<PageWrapper title="Sobre Mim">
			<div className="max-w-4xl mx-auto">
				<motion.h1 variants={itemVariants} className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">Sobre Mim</motion.h1>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
					<motion.div variants={itemVariants} className="md:col-span-1">
						<div className="relative w-48 h-48 mx-auto md:mx-0">
							<Image
								src={personalData.profileImage}
								alt={personalData.name}
								layout="fill"
								objectFit="cover"
								className="rounded-full"
							/>
						</div>
					</motion.div>
					<motion.div variants={itemVariants} className="md:col-span-2">
						<p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
							{aboutData.summary}
						</p>
					</motion.div>
				</div>
				<div className="mt-12">
					<motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">Minhas Habilidades</motion.h2>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						{aboutData.skills.map((skill, index) => (
							<motion.div variants={itemVariants} key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center shadow-sm">
								<h3 className="text-xl font-semibold text-gray-800 dark:text-white">{skill}</h3>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</PageWrapper>
	);
};

export default About;

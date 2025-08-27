import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn, FaGithub, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { personalData } from '../data/data';

const HomePage = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};


	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: { y: 0, opacity: 1 },
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800">
			<motion.div
				className="container mx-auto px-4 sm:px-6 lg:px-8"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
					<motion.div variants={itemVariants} className="relative w-48 h-48 md:w-64 md:h-64">
						<Image
							src={personalData.profileImage}
							alt={personalData.name}
							priority
							layout="fill"
							objectFit="cover"
							className="rounded-full shadow-lg"
						/>
					</motion.div>

					<motion.div variants={itemVariants} className="text-center md:text-left">
						<h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white">
							{personalData.name}
						</h1>
						<p className="mt-2 text-lg md:text-xl text-gray-600 dark:text-gray-300">
							{personalData.title}
						</p>

						<div className="mt-6 flex justify-center md:justify-start space-x-4">
							<a
								href={personalData.social.github}
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
								aria-label="GitHub profile"
							>
								<FaGithub className="w-8 h-8" />
							</a>
							<a
								href={personalData.social.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
								aria-label="LinkedIn profile"
							>
								<FaLinkedinIn className="w-8 h-8" />
							</a>
						</div>

						<div className="mt-8">
							<Link
								href={personalData.cv}
								download
								className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg"
							>
								<FaDownload />
                                Download CV
							</Link>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
};

export default HomePage;

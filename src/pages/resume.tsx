import PageWrapper from '../components/PageWrapper';
import { resumeData } from '../data/data';
import { motion } from 'framer-motion';

const itemVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: { y: 0, opacity: 1 },
};


const Resume = () => {
	return (
		<PageWrapper>
			<div className="max-w-4xl mx-auto">
				<motion.h1 variants={itemVariants} className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">Currículo</motion.h1>
				<motion.div variants={itemVariants}>
					<h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Experiência</h2>
					{resumeData.experience.map((exp, index) => (
						<div key={index} className="mb-8 p-4 rounded-lg bg-white dark:bg-gray-700 shadow-sm">
							<h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{exp.company}</h3>
							{exp.title && <p className="text-lg font-medium text-blue-600 dark:text-blue-400">{exp.title}</p>}
							<p className="text-md text-gray-500 dark:text-gray-400">{exp.period}</p>
							{exp.description && <p className="text-lg leading-relaxed mt-4 text-gray-600 dark:text-gray-300">{exp.description}</p>}
						</div>
					))}
				</motion.div>
				<motion.div variants={itemVariants} className="mt-12">
					<h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Formação acadêmica</h2>
					<div className="p-4 rounded-lg bg-white dark:bg-gray-700 shadow-sm">
						<h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{resumeData.education.institution}</h3>
						<p className="text-lg font-medium text-gray-600 dark:text-gray-300">{resumeData.education.degree}</p>
					</div>
				</motion.div>
				<div className="mt-12">
					<motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">Certificações</motion.h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{resumeData.certifications.map((cert, index) => (
							<motion.div variants={itemVariants} key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center shadow-sm">
								<h3 className="text-xl font-semibold text-gray-800 dark:text-white">{cert}</h3>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</PageWrapper>
	);
};

export default Resume;

import Header from '../components/Header';
import { resumeData } from '../data/data.tsx';

const Resume = () => {
	return (
		<>
			<Header />
			<div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
					<div className="max-w-4xl mx-auto">
						<h1 className="text-4xl font-bold text-center mb-8">Resumo</h1>
						<div>
							<h2 className="text-3xl font-bold mb-6">Experiência</h2>
							{resumeData.experience.map((exp, index) => (
								<div key={index} className="mb-8">
									<h3 className="text-2xl font-semibold">{exp.company}</h3>
									{exp.title && <p className="text-lg font-medium">{exp.title}</p>}
									<p className="text-md text-gray-500">{exp.period}</p>
									{exp.description && <p className="text-lg leading-relaxed mt-4">{exp.description}</p>}
								</div>
							))}
						</div>
						<div>
							<h2 className="text-3xl font-bold mb-6">Formação acadêmica</h2>
							<div>
								<h3 className="text-2xl font-semibold">{resumeData.education.institution}</h3>
								<p className="text-lg font-medium">{resumeData.education.degree}</p>
							</div>
						</div>
						<div className="mt-12">
							<h2 className="text-3xl font-bold text-center mb-6">Certificações</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{resumeData.certifications.map((cert, index) => (
									<div key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
										<h3 className="text-xl font-semibold">{cert}</h3>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Resume;
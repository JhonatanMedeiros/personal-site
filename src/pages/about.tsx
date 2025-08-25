import Image from 'next/image';
import Header from '../components/Header';
import { aboutData, personalData } from '../data/data';

const About = () => {
	return (
		<>
			<Header />
			<div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
					<div className="max-w-4xl mx-auto">
						<h1 className="text-4xl font-bold text-center mb-8">Sobre Mim</h1>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
							<div className="md:col-span-1">
								<div className="relative w-48 h-48 mx-auto md:mx-0">
									<Image
										src={personalData.profileImage}
										alt={personalData.name}
										layout="fill"
										objectFit="cover"
										className="rounded-full"
									/>
								</div>
							</div>
							<div className="md:col-span-2">
								<p className="text-lg leading-relaxed">
									{aboutData.summary}
								</p>
							</div>
						</div>
						<div className="mt-12">
							<h2 className="text-3xl font-bold text-center mb-6">Minhas Habilidades</h2>
							<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
								{aboutData.skills.map((skill, index) => (
									<div key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
										<h3 className="text-xl font-semibold">{skill}</h3>
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

export default About;

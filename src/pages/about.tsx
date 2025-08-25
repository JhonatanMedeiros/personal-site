import Header from '../components/Header';

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
								<img src="/my-profile.jpg" alt="Jhonatan de Medeiros" className="rounded-full w-48 h-48 mx-auto" />
							</div>
							<div className="md:col-span-2">
								<p className="text-lg leading-relaxed">
									Olá! Eu sou Jhonatan de Medeiros, um desenvolvedor web apaixonado por criar soluções inovadoras e eficientes. Com uma sólida experiência em desenvolvimento front-end e back-end, busco constantemente aprimorar minhas habilidades e conhecimentos para entregar produtos de alta qualidade.
								</p>
							</div>
						</div>
						<div className="mt-12">
							<h2 className="text-3xl font-bold text-center mb-6">Minhas Habilidades</h2>
							<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
								<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
									<h3 className="text-xl font-semibold">React</h3>
								</div>
								<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
									<h3 className="text-xl font-semibold">Next.js</h3>
								</div>
								<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
									<h3 className="text-xl font-semibold">TypeScript</h3>
								</div>
								<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
									<h3 className="text-xl font-semibold">Node.js</h3>
								</div>
							</div>
						</div>
						<div className="mt-12">
							<h2 className="text-3xl font-bold text-center mb-6">Minha Jornada</h2>
							<p className="text-lg leading-relaxed">
								Minha jornada no mundo da programação começou com a curiosidade de entender como a tecnologia funciona. Desde então, tenho me dedicado a aprender e a me aprofundar em diversas tecnologias, sempre com o objetivo de criar produtos que façam a diferença na vida das pessoas.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;

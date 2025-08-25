import { AiOutlineHome } from 'react-icons/ai';
import { CgNotes } from 'react-icons/cg';
import { FaRegUser } from 'react-icons/fa';
// import { FaBlogger, FaRegUser } from 'react-icons/fa';
// import { FiCodesandbox } from 'react-icons/fi';
// import { RiContactsBookLine } from 'react-icons/ri';

export const personalData = {
	name: 'Jhonatan Medeiros',
	title: 'Tech Lead - Front end | Angular | TypeScript | Node',
	location: 'Florianópolis, Santa Catarina, Brasil',
	profileImage: '/profile.jpg',
	cv: 'cv.pdf',
	social: {
		github: 'https://github.com/JhonatanMedeiros',
		linkedin: 'https://linkedin.com/in/jhonatan-hardt-de-medeiros'
	}
};

export const aboutData = {
	summary: 'A minha jornada na programação começou aos 15 anos, quando me aventurei no universo do JAVA. Posteriormente, expandi meus horizontes para o PHP e descobri o poder do JavaScript. Com o tempo, mergulhei no desenvolvimento com AngularJS (versão 1), Ionic e Apache Cordova (PhoneGap). Acompanhei de perto a evolução para o Angular 2+ e, assim, migrei projetos do AngularJS para a nova versão. Logo após, adentrei no mundo do TypeScript e RxJs.',
	skills: ['Angular', 'TypeScript', 'Node.js', 'Docker']
};

export const resumeData = {
	experience: [
		{
			company: '4Asset',
			title: 'Tech Lead - Frontend',
			period: 'março de 2019 - Present (6 anos 6 meses)',
			description: 'Líder Técnico de Desenvolvimento Front-End especializado em soluções escaláveis para a governança territorial. Com expertise em frameworks de mapeamento e integração de dados geoespaciais, lidero o desenvolvimento de sistemas que aumentam a eficiência e a precisão na gestão de territórios, colaborando de forma interdisciplinar com diversas áreas da equipe.'
		},
		{
			company: 'Desenvolvedor web freelancer',
			title: '',
			period: 'abril de 2018 - agosto de 2024 (6 anos 5 meses)',
			description: ''
		},
		{
			company: 'Delinea - Tecnologia Educacional',
			title: 'Desenvolvedor de front-end',
			period: 'agosto de 2017 - março de 2019 (1 ano 8 meses)',
			description: 'Trabalhei com desenvolvimento de aplicações na área da educação, utilizando as tecnologias: Angular 4, Javascript/Typescript, HTML/CSS, CI/CD, Jenkins, AWS entre outras.'
		},
		{
			company: 'myFid',
			title: 'Desenvolvedor web',
			period: 'dezembro de 2016 - julho de 2017 (8 meses)',
			description: 'Trabalhei com desenvolvimento de aplicações, utilizando as tecnologias: Ionic, AngularJs, Javascript/Typescript, Protractor, HTML/CSS, Jenkins, entre outras.'
		}
	],
	education: {
		institution: 'Universidade Estácio de Sá',
		degree: 'Bacharelado, Gestão de Sistemas de Informação - (2016 - 2019)'
	},
	certifications: [
		'Fundamentos do Node.js',
		'Vueconf.US 2021',
		'Construindo Aplicações Web Com o Novo Angular (4, 5 e 6)',
		'Angular 7 Avançado: Criando uma Arquitetura Master/Detail'
	]
};

export const menuItems = [
	{
		id: '01',
		name: 'Início',
		link: '/',
		icon: <AiOutlineHome />
	},
	{
		id: '02',
		name: 'Sobre',
		link: '/about',
		icon: <FaRegUser />
	},
	{
		id: '03',
		name: 'Currículo',
		link: '/resume',
		icon: <CgNotes />
	},
	// {
	// 	id: '04',
	// 	name: 'Projetos',
	// 	link: '/works',
	// 	icon: <FiCodesandbox />
	// },
	// {
	// 	id: '05',
	// 	name: 'Blog',
	// 	link: '/blogs',
	// 	icon: <FaBlogger />
	// },
	// {
	// 	id: '06',
	// 	name: 'Contato',
	// 	link: '/contact',
	// 	icon: <RiContactsBookLine />
	// }
];

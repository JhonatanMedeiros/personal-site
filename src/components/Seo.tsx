import Head from 'next/head';
import { useRouter } from 'next/router';
import { personalData } from '../data/data';

const Seo = ({ title, description, image }) => {
    const router = useRouter();
    const defaultTitle = `Jhonatan de Medeiros - ${personalData.title}`;
    const meta = {
        title: title ? `${title} | Jhonatan de Medeiros` : defaultTitle,
        description: description || 'Portfólio de Jhonatan de Medeiros, Desenvolvedor Web especialista em Front-end com Angular, TypeScript e Node.js.',
        image: image || `${router.basePath}${personalData.profileImage}`,
        url: `${router.basePath}${router.asPath}`,
        type: 'website',
        author: 'Jhonatan de Medeiros',
        keywords: 'Jhonatan de Medeiros, Desenvolvedor Web, Front-end, Angular, TypeScript, Node.js, Portfólio',
    };

    return (
        <Head>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords} />
            <meta name="author" content={meta.author} />
            <meta property="og:title" content={meta.title} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:image" content={meta.image} />
            <meta property="og:url" content={meta.url} />
            <meta property="og:type" content={meta.type} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={meta.title} />
            <meta name="twitter:description" content={meta.description} />
            <meta name="twitter:image" content={meta.image} />
        </Head>
    );
};

export default Seo;

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SpeedInsights } from '@vercel/speed-insights/next';
import ContextProvider from '../Context/ContextProvider';

function MyApp ({ Component, pageProps }: AppProps) {
	return (
		<ContextProvider>
			<Head>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
				<link rel="manifest" href="/site.webmanifest"/>
			</Head>
			<div className="bg-gray-100 dark:bg-gray-800">
				<Component {...pageProps} />
				<SpeedInsights />
			</div>
		</ContextProvider>
	);
}

export default MyApp;

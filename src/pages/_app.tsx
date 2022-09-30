import '../styles/globals.css';
import type { AppProps } from 'next/app';

import ContextProvider from '../Context/ContextProvider';

function MyApp ({ Component, pageProps }: AppProps) {
	return (
		<ContextProvider>
			<div className="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
				<Component {...pageProps} />
			</div>
		</ContextProvider>
	);
}

export default MyApp;

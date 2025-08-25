import '../styles/globals.css';
import type { AppProps } from 'next/app';

import ContextProvider from '../Context/ContextProvider';

function MyApp ({ Component, pageProps }: AppProps) {
	return (
		<ContextProvider>
			<div className="bg-gray-100 dark:bg-gray-800">
				<Component {...pageProps} />
			</div>
		</ContextProvider>
	);
}

export default MyApp;

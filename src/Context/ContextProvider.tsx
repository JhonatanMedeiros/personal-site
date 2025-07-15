import { createContext, ReactNode } from 'react';

import AllData from '../Hooks/AllData';

export interface MenuItem {
	id: string;
	name: string;
	link: string;
	icon: ReactNode;
}

export interface DataContextType {
	check: boolean;
	local: string;
	handleTheme: (value: string) => void;
	menuItem: MenuItem[];
}

export const MyContext = createContext<DataContextType | null>(null);

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
	const value = AllData();
	return (
		<MyContext.Provider value={value}>
			{children}
		</MyContext.Provider>
	);
};

export default ContextProvider;

import { useContext } from 'react';
import { MyContext, DataContextType } from '../Context/ContextProvider';

const useDataContext = () => {
	return useContext(MyContext) as DataContextType;
};

export default useDataContext;

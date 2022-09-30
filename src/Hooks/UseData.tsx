import { useContext } from 'react';
import { MyContext } from '../Context/ContextProvider';

const useDataContext = () => {
	return useContext(MyContext);
};

export default useDataContext;

import { useEffect, useState } from 'react';
import { menuItems } from '../data/data.tsx';

const AllData = () => {
	const [check, setCheck] = useState(false);
	const [local, setLocal] = useState(''); // localStorage.getItem('theme')

	// dark and light theme controls
	useEffect(() => {
		const themeValue = localStorage?.getItem('theme');

		if (!themeValue) {
			setCheck(false);
			localStorage.setItem('theme', 'dark');
		} else {
			themeValue === 'dark' && setCheck(true);
			themeValue === 'light' && setCheck(false);
		}

		localStorage?.getItem('theme') === 'dark'
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}, []);

	// Create and light theme function
	const handleTheme = (value: string) => {
		if (value === 'light') {
			setCheck(false);
			localStorage.setItem('theme', 'light');
			setLocal('light');
		} else {
			setCheck(true);
			localStorage.setItem('theme', 'dark');
			setLocal('dark');
		}
		localStorage?.getItem('theme') === 'dark'
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	};

	return {
		check,
		local,
		handleTheme,
		menuItem: menuItems
	};
};

export default AllData;
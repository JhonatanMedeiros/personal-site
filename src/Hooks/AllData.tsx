import { useEffect, useState } from 'react';
import { CgNotes } from 'react-icons/cg';
import { FaBlogger, FaRegUser } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { FiCodesandbox } from 'react-icons/fi';
import { RiContactsBookLine } from 'react-icons/ri';

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

	// Menu items for Homepage One
	const menuItem = [
		{
			id: '01',
			name: 'Home',
			link: '/',
			icon: <AiOutlineHome />
		},
		{
			id: '02',
			name: 'About',
			link: '/about',
			icon: <FaRegUser />
		},
		{
			id: '06',
			name: 'Resume',
			link: '/resume',
			icon: <CgNotes />
		},
		{
			id: '03',
			name: 'Works',
			link: '/works',
			icon: <FiCodesandbox />
		},
		{
			id: '04',
			name: 'Blogs',
			link: '/blogs',
			icon: <FaBlogger />
		},
		{
			id: '05',
			name: 'Contact',
			link: '/contact',
			icon: <RiContactsBookLine />
		}
	];

	return {
		check,
		local,
		handleTheme,
		menuItem
	};
};

export default AllData;

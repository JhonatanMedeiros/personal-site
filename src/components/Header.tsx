import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import useDataContext from '../Hooks/UseData';
import { MenuItem } from '../Context/ContextProvider';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const { handleTheme, check, menuItem } = useDataContext();


	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const themeSwitch = (
		<button
			onClick={() => handleTheme(check ? 'light' : 'dark')}
			className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 focus:outline-none ${
				isScrolled || isOpen ? 'bg-gray-200 dark:bg-gray-700' : 'bg-white/90 dark:bg-gray-800/90'
			}`}
		>
			{check ? (
				<FiSun className="text-yellow-500 text-xl" />
			) : (
				<FiMoon className="text-gray-400 text-xl" />
			)}
		</button>
	);

	return (
		<>
			<header
				className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
					isScrolled ? 'bg-white/80 dark:bg-gray-900/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
				}`}
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-20">
						<Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
                            Jhonatan M.
						</Link>

						{/* Desktop Menu */}
						<nav className="hidden md:flex items-center space-x-6">
							{menuItem.map((item: MenuItem) => (
								<Link
									key={item.id}
									href={item.link}
									className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
								>
									{item.name}
								</Link>
							))}
							{themeSwitch}
						</nav>

						{/* Mobile Menu Button */}
						<div className="md:hidden flex items-center space-x-4">
							{themeSwitch}
							<button onClick={toggleMenu} className="z-50">
								<div className="w-6 h-6 flex flex-col justify-around">
									<motion.span
										animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
										className="block w-full h-0.5 bg-gray-800 dark:bg-white"
									></motion.span>
									<motion.span
										animate={{ opacity: isOpen ? 0 : 1 }}
										className="block w-full h-0.5 bg-gray-800 dark:bg-white"
									></motion.span>
									<motion.span
										animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
										className="block w-full h-0.5 bg-gray-800 dark:bg-white"
									></motion.span>
								</div>
							</button>
						</div>
					</div>
				</div>
			</header>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
						onClick={toggleMenu}
					>
						<motion.nav
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ type: 'spring', stiffness: 300, damping: 30 }}
							className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg p-8"
							onClick={(e) => e.stopPropagation()}
						>
							<ul className="flex flex-col space-y-6 mt-16">
								{menuItem.map((item: MenuItem) => (
									<li key={item.id}>
										<Link
											href={item.link}
											className="flex items-center space-x-3 text-lg text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
											onClick={toggleMenu}
										>
											<span className="text-xl">{item.icon}</span>
											<span>{item.name}</span>
										</Link>
									</li>
								))}
							</ul>
						</motion.nav>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Header;

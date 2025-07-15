import { useState } from 'react';
import Link from 'next/link';
import { FiSun, FiMoon } from 'react-icons/fi';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import useDataContext from '../Hooks/UseData';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const { handleTheme, check, menuItem } = useDataContext() as any;

	const handle = (e: any) => {
		handleTheme(e);
	};

	return (
        <div className="z-50 ">
            <div className="container">
				{/* Header menu start  */}
				<header className="flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[1111111111]">
					<div className=" flex justify-between w-full px-4 lg:px-0 bg-[#F3F6F6] dark:bg-black lg:!bg-transparent">
						<div className="flex justify-end w-full items-center space-x-4 lg:my-8 my-5 ">
							<div className="flex items-center">
								{/* dark mode icon */}
								{!check
									? (
										<span
											onClick={() => handle('dark')}
											className="bg-white w-[40px] opacity-100 visible flex lg:opacity-0 lg:hidden h-[40px] rounded-full justify-center items-center text-black cursor-pointer ml-4"
										>
											<FiMoon className="text-3xl text-3xl text-black hover:!text-gray-600 transition-all duration-300 ease-in-out" />
										</span>
									)
									: (
										<span
											onClick={() => handle('light')}
											className="bg-[#4D4D4D] w-[40px] h-[40px] rounded-full  opacity-100 visible flex lg:opacity-0 lg:hidden justify-center items-center transition-all duration-300 ease-in-out cursor-pointer  ml-4"
										>
											<FiSun className="text-white text-3xl hover:!text-gray-600 text-3xl transition-all duration-300 ease-in-out" />
										</span>
									)}

								{/* mobile menu icon */}
								{!menuOpen
									? (
										<span
											onClick={() => setMenuOpen(!menuOpen)}
											className="bg-[#4D4D4D] lg:opacity-0 lg:invisible visible opacity-100 w-[40px] h-[40px] rounded-full flex justify-center cursor-pointer items-center text-white dark:text-white text-3xl ml-3 "
										>
											<AiOutlineMenu />
										</span>
									)
									: (
										<span
											onClick={() => setMenuOpen(!menuOpen)}
											className="bg-[#4D4D4D] lg:opacity-0 cursor-pointer lg:invisible visible opacity-100 w-[40px] h-[40px] rounded-full flex justify-center items-center text-white text-3xl ml-3 "
										>
											<AiOutlineClose />
										</span>
									)}
							</div>
						</div>
					</div>
					<nav className={`${menuOpen ? 'block  dark:bg-black' : 'hidden lg:block'}`}>
						{/* Menu items start  */}
						<ul
							className={`${
								menuOpen
									? 'block lg:hidden  absolute left-0 rounded-b-[20px] top-20 z-[22222222222222] w-full bg-white dark:bg-[#1D1D1D] drop-shadow-lg py-4 '
									: 'flex my-12 '
							}`}
						>
							{menuItem.map((item: any) => (
								<li
									onClick={() => setMenuOpen(false)}
									key={item.id}
									className=" "
								>
									<Link
                                        key={item.id}
                                        href={item?.link}
                                        className={`
											${menuOpen ? 'pl-4' : 'dark:bg-[#212425] rounded-md bg-white text-gray-lite'}
											text-black dark:text-white hover:!text-gray-600 font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out`
										}>

                                        <span className="mr-2 text-xl">{item?.icon}</span>{' '}
                                        {item?.name}

                                    </Link>
								</li>
							))}

							{/* dark mode */}
							{!check
								? (
									<span
										onClick={() => handle('dark')}
										className="bg-white w-[40px] hidden h-[40px] rounded-full lg:flex justify-center items-center cursor-pointer ml-2 "
									>
										<FiMoon className="text-3xl text-black hover:!text-gray-600 transition-all duration-300 ease-in-out" />
									</span>
								)
								: (
									<span
										onClick={() => handle('light')}
										className="bg-[#212425] w-[40px] h-[40px] hidden rounded-full lg:flex justify-center items-center cursor-pointer ml-2"
									>
										<FiSun className="text-white hover:!text-gray-600 text-3xl transition-all duration-300 ease-in-out" />
									</span>
								)}
						</ul>

						{/* Menu items end  */}
					</nav>
				</header>
				{/* Header menu End  */}
			</div>
        </div>
    );
};

export default Header;

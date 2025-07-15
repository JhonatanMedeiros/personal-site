import Image from 'next/legacy/image';
import Link from 'next/link';
import { FaLinkedinIn, FaGithub, FaDownload } from 'react-icons/fa';

import userImage from 'public/my-profile.jpg';

const HomePage = () => {
	return (
		<>
			<div
				className="flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh] xl:h-[71vh] justify-center"
				data-aos="fade"
			>
				<div className="relative w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px]">
					<Image
						src={userImage}
						alt=""
						layout="fill"
						objectFit="cover"
						className="rounded-full"
					/>
				</div>
				<h3 className="mt-6 mb-1 text-5xl font-semibold dark:text-white">
					Jhonatan de Medeiros
				</h3>
				<p className="mb-4 text-[#7B7B7B]">WEB Developer</p>
				{/* Avatar Info End */}

				{/* Social information start */}
				<div className="flex space-x-3">
					<a
						href="https://github.com/JhonatanMedeiros"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="social-btn bg-[#4D4D4D] text-white hover:text-black transition-all duration-300 ease-in-out">
							<FaGithub />
						</span>
					</a>
					<a
						href="https://linkedin.com/in/jhonatan-hardt-de-medeiros"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="social-btn bg-[#4D4D4D] text-[#0072b1] hover:text-white transition-all duration-300 ease-in-out">
							<FaLinkedinIn />
						</span>
					</a>
				</div>
				{/* Social information start */}

				<Link
					href="cv.pdf"
					download
					className="flex items-center bg-[#4D4D4D] px-8 py-3 text-lg text-white rounded-[35px] mt-6 hover:text-black transition-all duration-300 ease-in-out">

					<FaDownload className="mr-2" />Download CV

				</Link>
				{/* Download button End */}
			</div>
		</>
	);
};

export default HomePage;

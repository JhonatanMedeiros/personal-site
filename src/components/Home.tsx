import Image from 'next/legacy/image';
import Link from 'next/link';
import { FaLinkedinIn, FaGithub, FaDownload } from 'react-icons/fa';
import { personalData } from '../data/data';

const HomePage = () => {
	return (
		<>
			<div
				className="flex flex-col items-center min-h-screen justify-center bg-gray-100 dark:bg-gray-800"
				data-aos="fade"
			>
				<div className="relative w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px]">
					<Image
						src={personalData.profileImage}
						alt={personalData.name}
						layout="fill"
						objectFit="cover"
						className="rounded-full"
					/>
				</div>
				<h3 className="mt-6 mb-1 text-5xl font-semibold dark:text-white">
					{personalData.name}
				</h3>
				<p className="mb-4 text-[#7B7B7B]">{personalData.title}</p>
				{/* Avatar Info End */}

				{/* Social information start */}
				<div className="flex space-x-3">
					<a
						href={personalData.social.github}
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="social-btn bg-[#4D4D4D] text-white hover:text-black transition-all duration-300 ease-in-out">
							<FaGithub />
						</span>
					</a>
					<a
						href={personalData.social.linkedin}
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
					href={personalData.cv}
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

import Link from 'next/link';

export default function PageNotFound () {
	return (
		<div className="h-screen w-full flex flex-col justify-center items-center">
			<h1 className="text-7xl leading-none text-white font-extrabold md:text-8xl">
				404!
			</h1>
			<p className="text-medium text-white text-sm capitalize mb-7 mt-6 px-4 text-center">
				A página que você está procurando não existe
			</p>

			<Link href="/">
				<a className="flex items-center mx-auto bg-[#4D4D4D] duration-200 transition ease-linear px-8 py-3 text-lg text-white rounded-[5px]">
					Voltar
				</a>
			</Link>
		</div>
	);
}

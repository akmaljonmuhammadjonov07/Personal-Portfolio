import React from 'react';

import { ChevronRight, GithubIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import Image from 'next/image';

function Projects() {
	const projects = [
		{
			title: 'CMS Blog-App',
			img: '/projects/blog.png',
			skills: (
				<div className='flex justify-between w-full'>
					<div className='flex gap-0'>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<div>
										<Image
											width={500}
											height={500}
											src='/next.svg'
											className='w-10 h-10 relative z-10 border-2 rounded-full p-0 m-0'
											alt='Hygraph'
										/>
									</div>
								</TooltipTrigger>
								<TooltipContent>
									<p>Next.js</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<div>
										<svg
											width='100%'
											height='100%'
											viewBox='-10.5 -9.45 21 18.9'
											fill='black'
											xmlns='http://www.w3.org/2000/svg'
											className='w-10 h-10 relative z-10 bg-black p-1 -ml-4 border-2 rounded-full m-0'
										>
											<circle cx='0' cy='0' r='2' fill='#58C4DC'></circle>
											<g stroke='#58C4DC' strokeWidth='1' fill='none'>
												<ellipse rx='10' ry='4.5'></ellipse>
												<ellipse
													rx='10'
													ry='4.5'
													transform='rotate(60)'
												></ellipse>
												<ellipse
													rx='10'
													ry='4.5'
													transform='rotate(120)'
												></ellipse>
											</g>
										</svg>
									</div>
								</TooltipTrigger>
								<TooltipContent>
									<p>React.js</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<Image
										width={500}
										height={500}
										className='w-10 h-10 relative z-10 -ml-3.5 border-2 rounded-full p-0 m-0'
										src='/ts.png'
										alt='TypeScript'
									/>
								</TooltipTrigger>
								<TooltipContent>
									<p>TypeScript</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<Image
										width={500}
										height={500}
										className='w-10 h-10 relative z-10 -ml-3.5 border-2 rounded-full p-0 m-0'
										src='/shadcn.jpg'
										alt='ShadcnUI'
									/>
								</TooltipTrigger>
								<TooltipContent>
									<p>ShadcnUI</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<Image
										width={500}
										height={500}
										src='/tailwindcss.webp'
										className='w-10 h-10 relative z-10 -ml-3.5 border-2 rounded-full p-0 m-0'
										alt='Tailwindcss'
									/>
								</TooltipTrigger>
								<TooltipContent>
									<p>Tailwindcss</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<Image
										width={500}
										height={500}
										src='/hygraph.png'
										className='w-10 h-10 relative z-10 -ml-3.5 border-2 rounded-full p-0 m-0'
										alt='Hygraph'
									/>
								</TooltipTrigger>
								<TooltipContent>
									<p>Hygraph</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>
					<div className='flex gap-3'>
						<Link href={'https://praktikum-blog-app.vercel.app/'}>
							<Button variant={'outline'} size={'icon'}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
									className='lucide lucide-globe'
								>
									<circle cx='12' cy='12' r='10' />
									<path d='M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20' />
									<path d='M2 12h20' />
								</svg>
							</Button>
						</Link>
						<Link
							href={
								'https://github.com/akmaljonmuhammadjonov07/Praktikum_Blog_App'
							}
						>
							<Button variant={'outline'} size={'icon'}>
								<GithubIcon />
							</Button>
						</Link>
					</div>
				</div>
			),
		},
		{
			title: 'CMS Blog-App',
			img: '/projects/blog.png',
			skills: (
				<div className='flex justify-between w-full'>
					<div className='flex gap-0'>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<div>
										<Image
											width={500}
											height={500}
											src='/next.svg'
											className='w-10 h-10 relative z-10 border-2 rounded-full p-0 m-0'
											alt='Hygraph'
										/>
									</div>
								</TooltipTrigger>
								<TooltipContent>
									<p>Next.js</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<div>
										<svg
											width='100%'
											height='100%'
											viewBox='-10.5 -9.45 21 18.9'
											fill='black'
											xmlns='http://www.w3.org/2000/svg'
											className='w-10 h-10 relative z-10 bg-black p-1 -ml-4 border-2 rounded-full m-0'
										>
											<circle cx='0' cy='0' r='2' fill='#58C4DC'></circle>
											<g stroke='#58C4DC' strokeWidth='1' fill='none'>
												<ellipse rx='10' ry='4.5'></ellipse>
												<ellipse
													rx='10'
													ry='4.5'
													transform='rotate(60)'
												></ellipse>
												<ellipse
													rx='10'
													ry='4.5'
													transform='rotate(120)'
												></ellipse>
											</g>
										</svg>
									</div>
								</TooltipTrigger>
								<TooltipContent>
									<p>React.js</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<Image
										width={500}
										height={500}
										className='w-10 h-10 relative z-10 -ml-3.5 border-2 rounded-full p-0 m-0'
										src='/ts.png'
										alt='TypeScript'
									/>
								</TooltipTrigger>
								<TooltipContent>
									<p>TypeScript</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<Image
										width={500}
										height={500}
										className='w-10 h-10 relative z-10 -ml-3.5 border-2 rounded-full p-0 m-0'
										src='/shadcn.jpg'
										alt='ShadcnUI'
									/>
								</TooltipTrigger>
								<TooltipContent>
									<p>ShadcnUI</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<Image
										width={500}
										height={500}
										src='/tailwindcss.webp'
										className='w-10 h-10 relative z-10 -ml-3.5 border-2 rounded-full p-0 m-0'
										alt='Tailwindcss'
									/>
								</TooltipTrigger>
								<TooltipContent>
									<p>Tailwindcss</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<Image
										width={500}
										height={500}
										src='/hygraph.png'
										className='w-10 h-10 relative z-10 -ml-3.5 border-2 rounded-full p-0 m-0'
										alt='Hygraph'
									/>
								</TooltipTrigger>
								<TooltipContent>
									<p>Hygraph</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>
					<div className='flex gap-3'>
						<Link href={'https://praktikum-blog-app.vercel.app/'}>
							<Button variant={'outline'} size={'icon'}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
									className='lucide lucide-globe'
								>
									<circle cx='12' cy='12' r='10' />
									<path d='M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20' />
									<path d='M2 12h20' />
								</svg>
							</Button>
						</Link>
						<Link
							href={
								'https://github.com/akmaljonmuhammadjonov07/Praktikum_Blog_App'
							}
						>
							<Button variant={'outline'} size={'icon'}>
								<GithubIcon />
							</Button>
						</Link>
					</div>
				</div>
			),
		},
	];
	return (
		<div>
			<div>
				<h1 className='text-center text-2xl font-bold my-6'>My Projects</h1>
				<div className='max-w-6xl mx-auto p-6 grid grid-cols-2 max-md:grid-cols-1 gap-3'>
					{projects.map((i, e) => (
						<div
							key={e}
							className='w-[90%] h-[480px] group mx-auto dark:bg-secondary p-2 cursor-pointer bg-white dark:border-0 border overflow-hidden rounded-md dark:text-white text-black '
						>
							<figure className='w-full h-80 group-hover:h-72 transition-all duration-300 dark:bg-[#0a121a] bg-[#f0f5fa] p-2 rounded-md relative overflow-hidden'>
								<Image
									width={500}
									height={500}
									src={i.img}
									alt='shoes'
									className='h-72 w-full group-hover:border-4 border-4 group-hover:border-[#76aaf82d] rounded-lg object-cover transition-all duration-300'
								/>
							</figure>
							<article className='p-4 space-y-2'>
								<div className='h-8 w-20 bg-[#4393fc] dark:bg-blue-600 rounded-md'></div>
								<h1 className='text-xl font-semibold capitalize'>{i.title}</h1>
								<div className='relative'>{i.skills}</div>
								<a
									href='#'
									className=' text-base dark:text-white text-blue-600 font-normal  group-hover:opacity-100 opacity-0 translate-y-2 group-hover:translate-y-0 pt-2 flex gap-1  transition-all duration-300  '
								>
									Learn about Atlas
									<span>
										<ChevronRight />
									</span>
								</a>
							</article>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Projects;

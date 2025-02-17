import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import Image from 'next/image';
import { GithubIcon } from 'lucide-react';

export const featured_projects = [
	{
		title: 'CMS Blog-App',
		img: '/projects/blog.png',
		skills: (
			<div className='grid sm:flex gap-3 justify-between w-full'>
				<div className='flex max-sm:grid gap-0'>
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
		title: 'Gym App',
		img: '/projects/gym.png',
		skills: (
			<div className='grid sm:flex gap-3 justify-between w-full'>
				<div className='flex max-sm:grid gap-0'>
					<TooltipProvider>
						<Tooltip>
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
									src='/firebase.png'
									className='w-10 h-10 relative z-10 -ml-3.5 border-2 rounded-full p-0 m-0'
									alt='FireBase'
								/>
							</TooltipTrigger>
							<TooltipContent>
								<p>FireBase</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Image
									width={500}
									height={500}
									src='/zustand.png'
									className='w-10 h-10 relative z-10 -ml-3.5 border-2 rounded-full p-0 m-0'
									alt='Zustand'
								/>
							</TooltipTrigger>
							<TooltipContent>
								<p>Zustand</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</div>
				<div className='flex gap-3'>
					<Link href={'https://gym-training-eea21.web.app/'}>
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
					<Link href={'https://github.com/akmaljonmuhammadjonov07/Gym_App'}>
						<Button variant={'outline'} size={'icon'}>
							<GithubIcon />
						</Button>
					</Link>
				</div>
			</div>
		),
	},
];

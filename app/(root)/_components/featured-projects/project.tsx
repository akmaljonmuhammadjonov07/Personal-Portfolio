import React from 'react';
import { ChevronRight, GithubIcon, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

import { featured_projects } from '@/constants';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';

function Projects() {
	return (
		<div>
			<div>
				<h1 className='text-center text-2xl font-bold my-6'>
					Featured Projects
				</h1>
				<div className='max-w-6xl mx-auto p-6 px-3 grid grid-cols-2 max-md:grid-cols-1 gap-3 gap-y-3'>
					{featured_projects.map((e, index) => (
						<div
							key={index}
							className='w-[90%] h-auto group mx-auto dark:bg-secondary p-2 pb-0 cursor-pointer bg-white dark:border-0 border overflow-hidden rounded-md dark:text-white text-black '
						>
							<figure className='w-full h-80 group-hover:h-72 transition-all duration-300 dark:bg-[#0a121a] bg-[#f0f5fa] p-2 rounded-md relative overflow-hidden'>
								<Image
									width={500}
									height={500}
									src={e.img}
									alt='project'
									className='h-72 w-full group-hover:border-4 border-4 group-hover:border-[#76aaf82d] rounded-lg object-cover transition-all duration-300'
								/>
							</figure>
							<article className='p-4 space-y-2'>
								<div className='h-8 w-20 bg-[#4393fc] dark:bg-blue-600 rounded-md'></div>
								<h1 className='text-xl font-semibold capitalize'>{e.title}</h1>
								<div className='relative'>
									<div className='grid sm:flex gap-3 justify-between w-full'>
										<div className='flex max-sm:flex gap-0'>
											{e.skills.map((skill, idx) => (
												<TooltipProvider key={idx}>
													<Tooltip>
														<TooltipTrigger asChild>
															<div>
																<Image
																	width={500}
																	height={500}
																	src={skill.icon}
																	className='w-10 h-10 relative z-10 border-2 rounded-full p-0 m-0'
																	alt='Hygraph'
																/>
															</div>
														</TooltipTrigger>
														<TooltipContent>
															<p>{skill.title}</p>
														</TooltipContent>
													</Tooltip>
												</TooltipProvider>
											))}
										</div>
										<div className='flex gap-3'>
											<Link href={e.weblink}>
												<Button variant={'outline'} size={'icon'}>
													<Globe />
												</Button>
											</Link>
											<Link href={`${e.gitlink}`}>
												<Button variant={'outline'} size={'icon'}>
													<GithubIcon />
												</Button>
											</Link>
										</div>
									</div>
								</div>
								<a
									href='#'
									className='text-base z-0 dark:text-white text-blue-600 font-normal group-hover:opacity-100 opacity-0 translate-y-2 group-hover:translate-y-0 pt-0 flex gap-1 transition-all duration-300'
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

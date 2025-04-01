import { SquareArrowOutUpRight } from 'lucide-react';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { edu } from '@/constants';

const Education = () => {
	return (
		<div className='max-w-4xl md:max-w-2xl xl:max-w-4xl mx-auto p-6'>
			<h2 className='text-2xl font-bold mb-4'>Education</h2>
			<ul className='space-y-6'>
				{edu.map((e, index) => (
					<div key={index} className='flex items-center justify-between'>
						<div className='flex items-center'>
							<Image
								width={50}
								height={50}
								src={e.logo}
								alt={e.company}
								className='w-12 h-12 rounded-full mr-4'
							/>
							<div className='max-sm:text-xs'>
								<div className='flex gap-3'>
									<h3 className='font-semibold '>{e.company}</h3>
									<Dialog>
										<DialogTrigger asChild>
											<button
												aria-label='visit'
												className='sm:hidden max-sm:hidden md:flex'
											>
												<SquareArrowOutUpRight size={15} />
											</button>
										</DialogTrigger>
										<DialogContent className='sm:max-w-[425px]'>
											<DialogHeader>
												<div className='flex items-center gap-3'>
													<Image
														width={50}
														height={50}
														src={e.logo}
														alt={e.company}
													/>
													<DialogTitle>{e.company}</DialogTitle>
												</div>
												<div>About:</div>
												<DialogDescription>
													<div>{e.desc}</div>

													<div className='mt-4'>{e.sdesc}</div>
												</DialogDescription>
												<div>Skills:</div>
												<div className='gap-2 flex flex-wrap'>
													{e.skills?.map((skill, i) => (
														<Badge key={i}>{skill.title}</Badge>
													))}
												</div>
												<div className='mt-5'>
													<div className='pt-2'>{e.ctitle}</div>
													{e.certificate && (
														<a
															target='_blank'
															rel='noopener noreferrer'
															href={e.certificate}
														>
															<Badge>{e.cdesc}</Badge>
														</a>
													)}
												</div>
												<div className='pt-2'>Link:</div>
												<div className='gap-3 flex flex-wrap'>
													{e.btn?.map((b, i) => (
														<Link target='_blank' key={i} href={b.link}>
															<Button>{b.title}</Button>
														</Link>
													))}
												</div>
											</DialogHeader>
										</DialogContent>
									</Dialog>
								</div>
								<p className='text-sm text-gray-600 dark:text-gray-400'>
									{e.role}
								</p>
							</div>
						</div>
						<div className='max-sm:text-xs'>
							<p className='text-sm text-gray-500 dark:text-gray-300'>
								{e.date}
							</p>
						</div>
					</div>
				))}
			</ul>
		</div>
	);
};

export default Education;

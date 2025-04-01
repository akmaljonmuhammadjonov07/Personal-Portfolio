import React from 'react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { certificates } from '@/constants';
import { ExternalLink } from 'lucide-react';
import { Badge } from '../ui/badge';

function ProjectCard() {
	return (
		<div>
			{certificates.map((project, index) => (
				<motion.div
					key={index}
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					whileHover={{
						scale: 1.02,
						rotate: 5,
						boxShadow: '20px 20px 40px rgba(0, 0, 0, 0.35)',
					}}
					whileTap={{ scale: 0.92 }}
					transition={{ duration: 0.1, ease: 'easeInOut' }}
					className='bg-white dark:bg-secondary dark:text-white shadow-2xl rounded-2xl overflow-hidden p-4 transition-all relative'
				>
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ duration: 0.3, ease: 'backInOut' }}
						className='absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-10'
					/>
					<div className='relative w-full h-40 rounded-lg overflow-hidden'>
						<Image
							src={project.image}
							alt={project.title}
							width={400}
							height={200}
							className='w-full h-full object-cover border'
						/>
					</div>
					<div className='p-4 relative z-10'>
						<h3 className='text-lg font-semibold dark:text-white text-gray-600'>
							{project.title}
						</h3>
						<h3 className='text-sm text-gray-600 dark:text-gray-300 min-h-12 flex items-center'>
							{project.description}
						</h3>
						<div className='gap-2 flex flex-wrap my-2 mb-4'>
							{project.skills?.map((skill, i) => (
								<Badge key={i}>{skill.title}</Badge>
							))}
						</div>
						<div className='flex items-center justify-between relative h-10 px-0'>
							<motion.a
								href={project.link}
								target='_blank'
								rel='noopener noreferrer'
								whileHover={{ scale: 1.15 }}
								className='flex items-center gap-2 text-blue-600 hover:underline dark:text-white h-full'
							>
								View Site <ExternalLink size={16} />
							</motion.a>

							<motion.a
								target='_blank'
								href={project.see}
								rel='noopener noreferrer'
								custom={'Resume_Akmaljon.pdf'}
								whileHover={{ scale: 1.15, color: '#1d4ed8' }}
								className='h-full flex items-center'
							>
								<Button
									variant={'secondary'}
									size={'icon'}
									className='h-full w-full dark:bg-secondary bg-slate-200 p-2 flex items-center'
								>
									See Certificate
								</Button>
							</motion.a>
						</div>
					</div>
				</motion.div>
			))}
		</div>
	);
}

export default ProjectCard;

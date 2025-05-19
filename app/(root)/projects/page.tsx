'use client';
import { useEffect } from 'react';
import ProjectCard from '@/components/Cards/ProjectCard';

export default function Page() {
	useEffect(() => {
		document.title = 'All Projects';
	}, []);

	return (
		<section className='py-12 pb-0'>
			<div className='container mx-auto px-6'>
				<h2 className='text-3xl font-bold text-center mb-8'>My Projects</h2>
				<div>
					<ProjectCard />
				</div>
			</div>
		</section>
	);
}

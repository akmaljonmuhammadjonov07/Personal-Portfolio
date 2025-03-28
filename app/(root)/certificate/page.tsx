'use client';
import { useEffect } from 'react';
import ProjectCard from '@/components/CertCard';

export default function Page() {
	useEffect(() => {
		document.title = 'Certificates';
	}, []);

	return (
		<section className='py-12'>
			<div className='container mx-auto px-6'>
				<h2 className='text-3xl font-bold text-center mb-8'>My Certificates</h2>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 max-w-6xl m-auto gap-6'>
					<ProjectCard />
				</div>
			</div>
		</section>
	);
}

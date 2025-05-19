import React from 'react';
import FeaturedProjectCard from '@/components/Cards/FeaturedProjectCard';

function Projects() {
	return (
		<div>
			<div>
				<h1 className='text-center text-2xl font-bold my-6'>
					Featured Projects
				</h1>
				<div>
					<FeaturedProjectCard />
				</div>
			</div>
		</div>
	);
}

export default Projects;

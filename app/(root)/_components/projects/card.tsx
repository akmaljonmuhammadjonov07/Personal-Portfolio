import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const services = [
	{
		step: '01',
		name: (
			<div>
				{' '}
				<Avatar>
					<AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</div>
		),
		imageUrl:
			'https://images.unsplash.com/photo-1632733711679-529326f6db12?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description:
			'State-of-the-art diagnostics to accurately identify vehicle issues.',
	},
	{
		step: '02',
		name: 'Repairs',
		imageUrl:
			'https://images.unsplash.com/photo-1687462970787-61d953508926?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description:
			'Engine overhauls to brake replacements, we ensure high-quality work for your vehicle’s longevity.',
	},
	{
		step: '03',
		name: 'Maintenance',
		imageUrl:
			'https://images.unsplash.com/photo-1635437536607-b8572f443763?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description:
			'Oil changes, tire rotations, and more to enhance performance and prevent future issues.',
	},
];

const FlipCardComponent = () => {
	return (
		<section className='py-16 sm:py-20 xl:py-5 bg-gray-100'>
			<div className='max-w-7xl mx-auto px-6 lg:px-8'>
				<h2 className='text-2xl font-bold mb-4'>Projects</h2>
				<div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-2'>
					{services.map(service => (
						<div
							key={service.name}
							className='group relative bg-white rounded-lg shadow-lg overflow-hidden [perspective:1000px]'
						>
							<div className='h-96 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
								{/* Front Side */}
								<div
									className='absolute inset-0 bg-cover bg-center'
									style={{
										backgroundImage: `url(${service.imageUrl})`,
									}}
								>
									<div className='absolute inset-0 bg-black/50 flex items-end p-4'>
										<h3 className='text-lg font-semibold text-white'>
											{service.name}
										</h3>
									</div>
								</div>
								{/* Back Side */}
								<div className='absolute inset-0 bg-gray-900 text-white px-6 py-4 [backface-visibility:hidden] [transform:rotateY(180deg)]'>
									<div className='flex flex-col justify-center h-full text-center'>
										{/* <h3 className='text-lg font-semibold mb-2'>
											{service.name}
										</h3> */}
										<p className='text-sm mb-4'>{service.description}</p>
										<div className='flex gap-4'>
											<button className='w-full py-2 bg-yellow-700 hover:bg-yellow-600 text-white font-medium rounded-full flex items-center justify-center'>
												<span>Demo</span>
											</button>
											<button className='w-full py-2 bg-yellow-700 hover:bg-yellow-600 text-white font-medium rounded-full flex items-center justify-center'>
												<span>Github</span>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FlipCardComponent;

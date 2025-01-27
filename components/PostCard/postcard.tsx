'use client';
import React, { useState } from 'react';
import { Clock } from 'lucide-react';
const posts = [
	{
		id: 1,
		category: 'Cooking',
		title: 'Simplest Salad Recipe ever',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
		image:
			'https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		time: '6 mins ago',
		comments: 39,
	},
	{
		id: 2,
		category: 'FastFood',
		title: 'Best FastFood Ideas (Yummy)',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
		image:
			'https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		time: '10 days ago',
		comments: 0,
	},
	{
		id: 3,
		category: 'Cooking',
		title: 'Why to eat salad?',
		description:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
		image:
			'https://images.pexels.com/photos/6086/food-salad-healthy-vegetables.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		time: '16 hours ago',
		comments: 9,
	},
];

function BlogCard() {
	const [filter, setFilter] = useState('All');

	const filteredPosts =
		filter === 'All' ? posts : posts.filter(post => post.category === filter);

	return (
		<div className='max-w-full xl:max-w-7xl mx-auto p-5 sm:p-10 md:p-16 pb-0'>
			{/* Filter Section */}
			<div className='border-b mb-5 flex justify-between items-center text-sm'>
				<div className='flex gap-5'>
					{['All', 'Cooking', 'FastFood'].map(category => (
						<button
							key={category}
							className={`${
								filter === category
									? 'text-indigo-600 border-b-2 border-indigo-600'
									: 'text-gray-600'
							} pb-2 uppercase font-semibold max-sm:text-xs`}
							onClick={() => setFilter(category)}
						>
							{category}
						</button>
					))}
				</div>
				<div className='text-indigo-600 hover:underline cursor-pointer italic'>
					My Blogs
				</div>
			</div>

			{/* Posts Section */}
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10'>
				{filteredPosts.map(post => (
					<div
						key={post.id}
						className='rounded overflow-hidden shadow-lg flex flex-col'
					>
						<div className='relative'>
							<a href='#'>
								<img className='w-full' src={post.image} alt={post.title} />
								<div className='hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25'></div>
							</a>
							<a href='#!'>
								<div className='text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out'>
									{post.category}
								</div>
							</a>
						</div>
						<div className='px-6 py-4 mb-auto'>
							<a
								href='#'
								className='font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2'
							>
								{post.title}
							</a>
							<p className='text-gray-500 text-sm'>{post.description}</p>
						</div>
						<div className='px-6 py-3 flex flex-row items-center justify-between bg-gray-100'>
							<a
								href='#'
								className='py-1 text-xs font-regular text-gray-900 flex flex-row items-center'
							>
								<Clock size={16} />
								<span className='ml-1'>{post.time}</span>
							</a>
							<a
								href='#'
								className='py-1 text-xs font-regular text-gray-900 flex flex-row items-center'
							>
								<svg
									className='h-5'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
									/>
								</svg>
								<span className='ml-1'>{post.comments} Comments</span>
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default BlogCard;

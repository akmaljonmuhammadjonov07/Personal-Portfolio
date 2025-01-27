const Education = () => {
	const edu = [
		{
			company: 'Codemy',
			link: 'https://codemy.uz/',
			role: 'Frontend Developer',
			date: 'January 2023 - April 2024',
			logo: '/codemy.png',
		},
		{
			company: 'Sammi | Praktikum',
			link: 'https://www.sammi.ac/',
			role: 'Frontend | Fullstack Developer',
			date: 'June 2024 - November 2024',
			logo: '/sammi.svg',
		},
		{
			company: 'Amigoscode',
			link: 'https://www.amigoscode.com/',
			role: 'Git - Github Developer',
			date: 'December 2024 - 1-month',
			logo: 'amigos.png',
		},
		{
			company: 'Geeksforgeeks',
			link: 'https://www.geeksforgeeks.org/',
			role: 'Backend | Frontend Developer',
			date: 'January 2018 - April 2018',
			logo: '/geks.png',
		},
		{
			company: 'Mitre Media',
			role: 'Software Engineer',
			date: 'May 2017 - August 2017',
			logo: '/codemy.png',
		},
	];

	return (
		<div className='max-w-4xl md:max-w-2xl xl:max-w-4xl mx-auto p-6'>
			<h2 className='text-2xl font-bold mb-4'>Education</h2>
			<ul className='space-y-6'>
				{edu.map((e, index) => (
					<a
						href={e.link}
						key={index}
						className='flex items-center justify-between'
					>
						<div className='flex items-center'>
							<img
								src={e.logo}
								alt={e.company}
								className='w-12 h-12 rounded-full mr-4'
							/>
							<div className='max-sm:text-xs'>
								<h3 className='font-semibold '>{e.company}</h3>
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
					</a>
				))}
			</ul>
		</div>
	);
};

export default Education;

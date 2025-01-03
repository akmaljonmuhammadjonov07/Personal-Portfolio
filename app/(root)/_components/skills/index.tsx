import Skill from './skill';

const SkillApp = () => {
	const skills = [
		{ title: 'JavaScript' },
		{ title: 'TypeScript' },
		{ title: 'React.js' },
		{ title: 'Next.js' },
		{ title: 'Redux' },
		{ title: 'Git / Github' },
		{ title: 'CSS / SASS' },
		{ title: 'Tailwindcss' },
		{ title: 'GraphQL' },
		{ title: 'FireBase' },
		{ title: 'Telegrambot' },
		{ title: 'SEO' },
	];

	return (
		<div className='max-w-4xl md:max-w-2xl xl:max-w-4xl mx-auto p-6'>
			<h2 className='text-2xl font-bold mb-4'>Skills</h2>
			<div className='flex gap-3 flex-wrap max-w-3xl max-md:justify-center'>
				{skills.map((skill, index) => (
					<div key={index} className='flex flex-wrap'>
						<Skill title={skill.title} />
					</div>
				))}
			</div>
		</div>
	);
};

export default SkillApp;

import React from 'react';
import WorkExperience from '../_components/work/work';
import Link from 'next/link';
import Projects from '../_components/projects/project';
import Education from '../_components/education/edu';
import SkillApp from '../_components/skills';

function HomePage() {
	return (
		<div className='relative'>
			<section className='text-gray-600 body-font '>
				<div className='container mx-auto flex px-5 py-20 items-center justify-center flex-col'>
					<img
						className='lg:w-28 lg:h-28 mb-10 object-cover object-center rounded-full text-white'
						alt='hero'
						src='/3NfruuWBTbWQTccxPUwh.webp'
					/>
					<div className='text-center lg:w-2/3 grid justify-items-center'>
						<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
							Hi, I{"'"}m Akmal 👋
						</h1>
						<p className='mb-8 leading-relaxed text-gray-700 w-[70%]'>
							Hello! My name is <span className='font-bold'>Akmaljon</span>. I
							am a passionate frontend developer with more than 1 year of
							experience. I specialize in creating responsive, modern and
							user-friendly websites that leave a lasting impression, and I{"'"}
							m a
							<span className='p-1'>
								<span className='font-bold'>React.js</span>
								{'  '}/{'  '}
								<span className='font-bold'>Next.js</span>
								{'  '}
								developer.
							</span>
						</p>
						<div className='flex justify-center'>
							<button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-base max-sm:text-sm'>
								Download CV
							</button>
							<Link
								href={'/about'}
								className='ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-base max-sm:text-sm'
							>
								About me
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section>
				<WorkExperience />
			</section>
			<section>
				<Education />
			</section>
			<section>
				<SkillApp />
			</section>
			<section>
				<Projects />
			</section>
		</div>
	);
}

export default HomePage;

import WorkExperience from '../_components/work/work';
import Projects from '../_components/projects/project';
import Education from '../_components/education/edu';
import SkillApp from '../_components/skills';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';

import Skill from '../_components/skills/skill';
function Page() {
	const skills = [
		{ title: 'JavaScript' },
		{ title: 'TypeScript' },
		{ title: 'React.js' },
		{ title: 'Next.js' },
		{ title: 'Redux' },
		{ title: 'Git / Github' },
		{ title: 'CSS / SASS' },
		{ title: 'Tailwindcss' },
		{ title: 'CMS' },
		{ title: 'FireBase' },
		{ title: 'Telegrambot' },
		{ title: 'SEO' },
	];
	return (
		<div className='relative'>
			<section className='text-gray-600 body-font '>
				<div className='container mx-auto flex px-5 py-16 items-center justify-center flex-col'>
					<Image
						width={180}
						height={180}
						className='lg:w-28 lg:h-28 mb-10 object-cover object-center rounded-full text-white'
						alt='hero'
						src='/user.webp'
						priority
					/>
					<div className='text-center lg:w-2/3 grid justify-items-center'>
						<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-300'>
							Hi, Im Akmal 👋
						</h1>
						<h1 className='text-start sm:text-2xl text-3xl mb-4 font-semibold text-gray-900 dark:text-gray-300'>
							About me
						</h1>
						<p className='mb-8 leading-relaxed text-gray-700 dark:text-gray-300 w-[70%]'>
							Hello! My name is <span className='font-bold'>Akmaljon</span>. I
							am a passionate frontend developer with more than 1 year of
							experience. I specialize in creating responsive, modern and
							user-friendly websites that leave a lasting impression, and I m a
							<span className='p-1'>
								<span className='font-bold'>React.js</span>
								{'  '}/{'  '}
								<span className='font-bold'>Next.js</span>
								{'  '}
								developer.
							</span>
						</p>
						<div className='justify-center gap-3 hidden sm:hidden max-sm:hidden md:flex'>
							<Dialog>
								<DialogTrigger asChild>
									<Button variant='secondary'>About me</Button>
								</DialogTrigger>
								<DialogContent className='xl:max-w-7xl max-sm:max-w-xl sm:hidden md:block'>
									<DialogHeader>
										<DialogTitle>My profile</DialogTitle>
									</DialogHeader>
									<div className='space-y-4'>
										<section>
											<h2 className='text-lg font-semibold dark:text-gray-400 text-gray-600'>
												Personal Info
											</h2>
											<p className='dark:text-gray-400 text-gray-600'>
												My name is Akmaljon, and I am 17 years old. I am a
												Junior Frontend Developer with over a year of experience
												in web development. I am a Frontend Developer with more
												than 1 year of experience in HTML, CSS, JavaScript,
												TypeScript, ReactJS and Next.js. During this time, I
												have successfully built and delivered many websites,
												including fullstack projects and fully functional
												Telegram bots. My goal is to become a full stack
												developer and contribute to large projects. I am
												passionate about learning new technologies and creating
												high quality solutions that meet customer needs
											</p>
										</section>
										<section>
											<h2 className='text-lg font-semibold dark:text-gray-400 text-gray-600'>
												Skills
											</h2>
											<div className='flex gap-2 justify-start'>
												<div className='flex gap-3 flex-wrap max-w-3xl my-3 max-md:justify-center'>
													{skills.map((skill, index) => (
														<div key={index} className='flex flex-wrap'>
															<Skill title={skill.title} />
														</div>
													))}
												</div>
											</div>
										</section>
										<section>
											<h2 className='text-lg font-semibold dark:text-gray-400 text-gray-600'>
												Education
											</h2>
											<p className='dark:text-gray-400 text-gray-600'>
												I have studied programming at {'Sammi Platform'},{' '}
												{'Codemy'}, {'GeeksforGeeks'}, and {'AmigosCode'},
												completing online courses and earning certificates in
												web development.
											</p>
										</section>

										<section>
											<h2 className='text-lg font-semibold dark:text-gray-400 text-gray-600'>
												My Resume
											</h2>
											<Button className='my-3'>Download CV</Button>
										</section>
									</div>
								</DialogContent>
							</Dialog>
						</div>
						<div className='justify-center gap-3 sm:flex md:hidden'>
							<Button>Download CV</Button>
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

export default Page;

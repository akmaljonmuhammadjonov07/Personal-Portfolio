'use client';
import ModeToggle from '@/components/shared/mode-toggle';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import {
	backVariants,
	glowVariants,
	itemVariants,
	navGlowVariants,
	navLinks,
	sharedTransition,
} from '@/constants';

function Navbar() {
	const pathname = usePathname();

	return (
		<nav className='w-full fixed top-0 left-0 z-50 flex justify-center p-4 '>
			<motion.nav
				className='h-14 bg-secondary shadow-2xl [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:bg-secondary dark:shadow-2xl w-auto px-3 flex justify-center items-center rounded-full'
				initial='initial'
				whileHover='hover'
			>
				<motion.div
					className='absolute -inset-2 bg-gradient-radial from-transparent via-primary/20 to-transparent rounded-3xl z-0 pointer-events-none'
					variants={navGlowVariants}
				/>
				<ul className='flex px-0 items-center gap-0 relative z-10'>
					{navLinks.links.map((item, index) => {
						const Icon = item.icon;
						const isActive = pathname === item.route;

						return (
							<motion.li key={item.name} className='relative'>
								<motion.div
									className='block rounded-xl overflow-visible group relative'
									style={{ perspective: '600px' }}
									whileHover='hover'
									initial='initial'
								>
									<motion.div
										className='absolute inset-0 z-0 pointer-events-none'
										variants={glowVariants}
										style={{
											background:
												navLinks.gradients[index % navLinks.gradients.length],
											opacity: 0,
											borderRadius: '16px',
										}}
									/>
									<motion.a
										aria-label={item.name}
										href={item.route}
										className={`flex items-center gap-2 sm:px-4 max-sm:px-3 py-2 relative z-10 bg-transparent transition-colors rounded-xl ${
											isActive
												? 'text-blue-400 font-semibold'
												: 'text-muted-foreground group-hover:text-foreground'
										}`}
										variants={itemVariants}
										transition={sharedTransition}
										style={{
											transformStyle: 'preserve-3d',
											transformOrigin: 'center bottom',
										}}
									>
										<span
											className={`transition-colors duration-300 ${
												isActive
													? 'text-blue-400'
													: `group-hover:${
															navLinks.iconColors[
																index % navLinks.iconColors.length
															]
													  } text-foreground`
											}`}
										>
											<Icon className='h-5 w-5' />
										</span>
										<span className='sm:flex max-sm:hidden'>{item.name}</span>
									</motion.a>
									<motion.a
										href={item.route}
										className='flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl'
										variants={backVariants}
										transition={sharedTransition}
										style={{
											transformStyle: 'preserve-3d',
											transformOrigin: 'center top',
											rotateX: 90,
										}}
									>
										<span
											className={`transition-colors duration-300 group-hover:${
												navLinks.iconColors[index % navLinks.iconColors.length]
											} text-foreground`}
										>
											<Icon className='h-5 w-5 text-blue-500' />
										</span>
										<span>{item.name}</span>
									</motion.a>
								</motion.div>
							</motion.li>
						);
					})}
					<motion.li className='relative'>
						<motion.div
							className='block rounded-xl overflow-visible group relative'
							style={{ perspective: '600px' }}
							whileHover='hover'
							initial='initial'
						>
							<motion.div
								className='absolute inset-0 z-0 pointer-events-none'
								variants={glowVariants}
								style={{
									background: navLinks.gradients[navLinks.gradients.length - 1],
									opacity: 0,
									borderRadius: '16px',
								}}
							/>
							<ModeToggle />
						</motion.div>
					</motion.li>
				</ul>
			</motion.nav>
		</nav>
	);
}

export default Navbar;

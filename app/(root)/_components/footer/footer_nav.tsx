import { footerLinks } from '@/constants';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import React from 'react';

function FooterNav() {
	return (
		<div>
			<div className='sticky bottom-5 w-full max-w-sm sm:max-w-md bg-secondary rounded-full flex justify-center items-center gap-6 text-black dark:text-white'>
				<motion.a
					href='mailto:info@akmaldev.uz'
					className='flex items-center gap-2 hover:text-black transition'
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
				>
					<Mail className='w-5 h-5' />
					<span className='hidden sm:inline'>info@akmaldev.uz</span>
				</motion.a>
				<div className='h-6 w-px bg-gray-500 hidden sm:block' />
				{footerLinks.map(social => (
					<motion.a
						key={social.link}
						href={social.link}
						className='dark:hover:text-gray-300 hover:text-black transition'
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
						aria-label={social.link}
					>
						<social.icon className='w-5 h-5' />
					</motion.a>
				))}
			</div>
		</div>
	);
}

export default FooterNav;

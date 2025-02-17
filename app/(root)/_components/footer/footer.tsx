'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { footerLinks } from '@/constants';
import { User2 } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

function Footer() {
	const [active, setActive] = useState(false);
	return (
		<div className='flex justify-center'>
			<footer className='flex justify-center py-10 flex-col container max-w-2xl max-sm:mx-10 space-y-12'>
				<h1 className='font-creteRound max-md:text-3xl text-5xl text-center'>
					Get latest posts delivered right to your inbox
				</h1>
				<div className='grid max-md:grid-cols-1 grid-cols-3 md:gap-4 w-full'>
					<Input
						className='w-full col-span-2'
						placeholder='Your email address'
						onFocus={() => setActive(true)}
						onBlur={() => setActive(false)}
					/>
					<Button
						size={'lg'}
						variant={active ? 'default' : 'outline'}
						className='max-md:mt-2'
					>
						<User2 className='w-4 h-4' />
						<span>Join today</span>
					</Button>
				</div>
				<div className='sticky bottom-5 p-0 m-0'>
					<div className='flex gap-6 justify-center items-center z-50 bg-secondary hover:shadow-2xl shadow-black p-4 px-2 max-w-xs m-auto text-white rounded-full'>
						{footerLinks.map((link, index) => (
							<div key={index} className='flex flex-wrap'>
								<Link href={link.link} target='_blank'>
									{link.icon && <link.icon />}
								</Link>
							</div>
						))}
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;

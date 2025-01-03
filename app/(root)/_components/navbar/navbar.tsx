'use client';
import { navLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
	const pathname = usePathname();
	return (
		<div className='w-full fixed top-0 left-0 z-50 flex justify-center p-4 bg-white'>
			<div className='h-14 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] w-auto px-3 flex justify-center items-center rounded-full'>
				{navLinks.map(nav => (
					<Link
						key={nav.route}
						href={nav.route}
						className={cn(
							'hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-md transition-colors',
							pathname === nav.route && 'text-blue-400 font-bold'
						)}
					>
						<div className='hidden sm:flex'>{nav.name}</div>
						<div className='flex sm:hidden'>{nav.icon && <nav.icon />}</div>
					</Link>
				))}
			</div>
		</div>
	);
}

export default Navbar;

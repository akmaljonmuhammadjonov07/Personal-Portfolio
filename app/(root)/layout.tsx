import { ChildProps } from '@/types';
import Navbar from './_components/navbar/navbar';
import Footer from './_components/footer/footer';

function Layout({ children }: ChildProps) {
	return (
		<main>
			<Navbar />
			<div className='py-24 text-black dark:text-white overflow-hidden'>
				{children}
			</div>
			<Footer />
		</main>
	);
}

export default Layout;

'use client';
import CertCard from '@/components/Cards/CertificateCard';
import { useEffect } from 'react';

export default function Page() {
	useEffect(() => {
		document.title = 'Certificates';
	}, []);

	return (
		<section className='py-12 pb-0'>
			<div className='container mx-auto px-6'>
				<h2 className='text-3xl font-bold text-center mb-8'>My Certificates</h2>
				<div>
					<CertCard />
				</div>
			</div>
		</section>
	);
}

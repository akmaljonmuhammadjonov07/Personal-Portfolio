'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { User2 } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import FooterNav from './footer_nav';

function Footer() {
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		if (!email) {
			toast.error('Iltimos, email kiriting! ❌');
			setLoading(false);
			return;
		}

		const BOT_TOKEN = process.env.NEXT_PUBLIC_BOT_TOKEN;
		const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID;

		if (!BOT_TOKEN || !CHAT_ID) {
			toast.error('Bot token yoki chat ID topilmadi! ❌');
			setLoading(false);
			return;
		}

		const TEXT = `📫 Yangi obuna!\n📧 Email: ${email}`;
		const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

		try {
			const response = await fetch(url, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ chat_id: CHAT_ID, text: TEXT }),
			});

			if (response.ok) {
				toast.success('Email muvaffaqiyatli yuborildi! ✅');
				setEmail('');
			} else {
				toast.error('Xatolik yuz berdi! ❌');
			}
		} catch (error) {
			console.error(error);
			toast.error('Server bilan aloqa o‘rnatilmadi! ❌');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='flex justify-center px-4 sm:px-6 lg:px-8'>
			<footer className='flex flex-col items-center py-10 container max-w-2xl space-y-12 text-center'>
				<h1 className='font-creteRound text-3xl sm:text-4xl md:text-5xl'>
					Get latest posts delivered right to your inbox
				</h1>

				<form
					className='flex flex-col sm:flex-row gap-4 w-full'
					onSubmit={handleSubmit}
				>
					<Input
						type='email'
						placeholder='Your email address'
						value={email}
						onChange={e => setEmail(e.target.value)}
						className='w-full px-4 py-2 text-lg rounded-md border border-gray-300'
					/>
					<Button
						type='submit'
						size={'lg'}
						disabled={loading}
						className='w-full sm:w-auto px-6 py-2 flex items-center justify-center gap-2'
					>
						<User2 className='w-4 h-4' />
						{loading ? 'Yuborilmoqda...' : 'Join Today'}
					</Button>
				</form>
				<div className='sticky bottom-5 w-full max-w-sm sm:max-w-md p-4 bg-secondary shadow-lg rounded-full flex justify-center items-center gap-6 text-black dark:text-white'>
					<FooterNav />
				</div>
			</footer>
		</div>
	);
}

export default Footer;

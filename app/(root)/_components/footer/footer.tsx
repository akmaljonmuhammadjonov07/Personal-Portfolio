'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { footerLinks } from '@/constants';
import { Mail, User2 } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

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
		<div className='flex justify-center'>
			<footer className='flex justify-center py-10 flex-col m-auto container max-w-2xl max-sm:mx-10 space-y-12'>
				<h1 className='font-creteRound max-md:text-3xl text-5xl text-center'>
					Get latest posts delivered right to your inbox
				</h1>

				{/* Email Input Form */}
				<form
					className='flex flex-col md:flex-row gap-4 w-full'
					onSubmit={handleSubmit}
				>
					<Input
						type='email'
						placeholder='Your email address'
						value={email}
						onChange={e => setEmail(e.target.value)}
						className='w-full'
					/>
					<Button
						type='submit'
						size={'lg'}
						disabled={loading}
						className='w-full md:w-auto'
					>
						<User2 className='w-4 h-4' />
						{loading ? 'Yuborilmoqda...' : 'Join Today'}
					</Button>
				</form>

				{/* Footer Links */}
				<div className='sticky bottom-5 p-0 m-0'>
					<div className='flex gap-6 justify-center items-center z-50 dark:bg-secondary bg-gray-800 shadow hover:shadow-2xl shadow-black p-4 px-2 max-w-md m-auto text-white rounded-full'>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
							className='flex justify-center items-center gap-6 text-muted-foreground'
						>
							<motion.a
								href='mailto:info@akmaldev.uz'
								className='text-muted-foreground hover:text-foreground flex gap-2 transition-colors'
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
							>
								<Mail /> info@akmaldev.uz
							</motion.a>

							<div className='h-6 w-px border-l border-gray-500' />
							{footerLinks.map(social => (
								<motion.a
									key={social.link}
									href={social.link}
									className='text-muted-foreground hover:text-foreground transition-colors'
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.95 }}
									aria-label={social.link}
								>
									<social.icon className='h-5 w-5' />
								</motion.a>
							))}
						</motion.div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;

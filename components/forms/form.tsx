'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Github, Instagram, Linkedin, Send } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

export function ContactForm({
	className,
	...props
}: React.ComponentPropsWithoutRef<'form'>) {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault(); // Sahifa refresh bo‘lishining oldini oladi
		setLoading(true);

		const BOT_TOKEN = process.env.NEXT_PUBLIC_BOT_TOKEN; // .env.local faylida saqlangan token
		const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID; // .env.local faylida saqlangan chat ID

		if (!BOT_TOKEN || !CHAT_ID) {
			toast.error('Bot token yoki chat ID topilmadi! ❌');
			setLoading(false);
			return;
		}

		const TEXT = `📫 Yangi xabar!\n\n📧 Email: ${email}\n✉️ Xabar: ${message} \n👤 Ismi: ${name}`;
		const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

		try {
			const response = await fetch(url, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ chat_id: CHAT_ID, text: TEXT }),
			});

			if (response.ok) {
				toast.success('Xabar muvaffaqiyatli yuborildi! ✅');
				setEmail('');
				setMessage('');
				setName('');
			} else {
				toast.error('Xatolik yuz berdi! ❌');
			}
		} catch (error) {
			toast.error('Server bilan aloqa o‘rnatilmadi! ❌');
		} finally {
			setLoading(false);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className={cn('flex flex-col gap-6', className)}
			{...props}
		>
			<div className='flex flex-col items-center gap-2 text-center'>
				<h1 className='text-2xl font-bold'>Contact Me</h1>
				<p className='text-sm text-muted-foreground'>
					Email va xabaringizni kiriting, biz tez orada javob beramiz.
				</p>
			</div>
			<div className='grid gap-6'>
				<div className='grid gap-2'>
					<Label htmlFor='email'>Email</Label>
					<Input
						id='email'
						type='email'
						placeholder='m@example.com'
						value={email}
						onChange={e => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className='grid gap-2'>
					<Label htmlFor='email'>Your name</Label>
					<Input
						id='name'
						type='name'
						placeholder='Create your name'
						value={name}
						onChange={e => setName(e.target.value)}
						required
					/>
				</div>
				<div className='grid gap-2'>
					<Label htmlFor='message'>Message</Label>
					<Input
						id='message'
						type='text'
						placeholder='Xabaringizni kiriting...'
						value={message}
						onChange={e => setMessage(e.target.value)}
						required
					/>
				</div>
				<Button type='submit' className='w-full' disabled={loading}>
					{loading ? 'Yuborilmoqda...' : 'Send Message'}
				</Button>
				<div className='relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border'>
					<span className='relative z-10 bg-background px-2 text-muted-foreground'>
						Or continue with
					</span>
				</div>
				<div className='flex gap-3 justify-center'>
					<Link href={'https://t.me/akmaldev14'} target='_blank'>
						<Button variant='secondary' size={'icon'}>
							<Send />
						</Button>
					</Link>
					<Link href={'https://www.instagram.com/akmal__dev/'} target='_blank'>
						<Button variant='secondary' size={'icon'}>
							<Instagram />
						</Button>
					</Link>
					<Link
						href={'https://www.linkedin.com/in/akmaljon-muhammadjonov'}
						target='_blank'
					>
						<Button variant='secondary' size={'icon'}>
							<Linkedin />
						</Button>
					</Link>
					<Link
						href={'https://github.com/akmaljonmuhammadjonov07/'}
						target='_blank'
					>
						<Button variant='secondary' size={'icon'}>
							<Github />
						</Button>
					</Link>
				</div>
			</div>
		</form>
	);
}

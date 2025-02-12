import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Github, Instagram, Linkedin, Send } from 'lucide-react';
import Link from 'next/link';

export function ContactForm({
	className,
	...props
}: React.ComponentPropsWithoutRef<'form'>) {
	return (
		<form className={cn('flex flex-col gap-6', className)} {...props}>
			<div className='flex flex-col items-center gap-2 text-center'>
				<h1 className='text-2xl font-bold'>Contact Me</h1>
				<p className='text-balance text-sm text-muted-foreground'>
					Enter your email below to login to your account
				</p>
			</div>
			<div className='grid gap-6'>
				<div className='grid gap-2'>
					<Label htmlFor='email'>Email</Label>
					<Input id='email' type='email' placeholder='m@example.com' required />
				</div>
				<div className='grid gap-2'>
					<div className='flex items-center'>
						<Label htmlFor='message'>Message</Label>
					</div>
					<Input id='message' type='message' required />
				</div>
				<Button type='submit' className='w-full'>
					Send Message
				</Button>
				<div className='relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border'>
					<span className='relative z-10 bg-background px-2 text-muted-foreground'>
						Or continue with
					</span>
				</div>
				<div className='flex gap-3 justify-center'>
					<Button variant='secondary' size={'icon'}>
						<Link href={'https://t.me/akmaldev14'} target='_blank'>
							<Send />
						</Link>
					</Button>
					<Button variant='secondary' size={'icon'}>
						<Link
							href={'https://www.instagram.com/akmal__dev/'}
							target='_blank'
						>
							<Instagram />
						</Link>
					</Button>
					<Button variant='secondary' size={'icon'}>
						<Link
							href={'https://www.linkedin.com/in/akmaljon-muhammadjonov'}
							target='_blank'
						>
							<Linkedin />
						</Link>
					</Button>
					<Button variant='secondary' size={'icon'}>
						<Link
							href={'https://github.com/akmaljonmuhammadjonov07/'}
							target='_blank'
						>
							<Github />
						</Link>
					</Button>
				</div>
			</div>
		</form>
	);
}

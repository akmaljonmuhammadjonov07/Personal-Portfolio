import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'sonner';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	metadataBase: new URL('https://akmaldev.uz'),
	title: "Akmaljon's portfolio",
	description:
		"Dasturlash va o'zim haqimda yangiliklar, maslahatlar, loyihalar, va dasturlash sohasidagi eng so'nggi xabarlar.",
	authors: [{ name: 'Akmaljon Muhammadjonov', url: 'https://akmaldev.uz' }],
	icons: { icon: '/favicon.png' },
	keywords:
		"akmal muhammadjonov, akmaljon muhammadjonov, akmaldev, dasturlash haqida maqolalar, dasturlashga oid yangiliklar, loyihalar, portfolio javascript, reactjs, nextjs, javascript proectlar, reactjs proectlar, nextjs proectlar, dasturlash tillari, o'zbek tilida maqolalar, reactjs o'zbek tilida, dasturlashni o'rganish, dasturlash, IT loyihalar o'zbek tilida, IT",
	openGraph: {
		title: 'Blog, dasturlashga oid maqolalar va loyihalar, yangiliklar',
		description:
			'Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blog va portfolioda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.',
		type: 'website',
		url: 'https://akmaldev.uz',
		locale: 'en_EN',
		images:
			'https://personal-portfolio-tan-six.vercel.app/_next/image?url=https%3A%2F%2Fus-west-2.graphassets.com%2Fcm3qooap50d2407k649bxflq5%2Fcm3u08x6ghgt807n0xv8w4vvd&w=750&q=75',
		countryName: 'Uzbekistan',
		siteName: 'Blog',
		emails: 'info@akmaldev.uz',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<NextTopLoader showSpinner={false} />
					<Toaster position='top-center' />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}

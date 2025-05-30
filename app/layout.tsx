import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'sonner';
import { GoogleAnalytics } from '@next/third-parties/google';
import { ChildProps } from '@/types';
import { SpeedInsights } from '@vercel/speed-insights/next';

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
	title: 'Akmaljon Muhammadjonov - Portfolio, Blog & IT Maqolalar',
	description:
		"Dasturlash va o'zim haqimda yangiliklar, maslahatlar, loyihalar, va dasturlash sohasidagi eng so'nggi xabarlar.",
	authors: [{ name: 'Akmaljon Muhammadjonov', url: 'https://akmaldev.uz' }],
	icons: {
		icon: '/akmaldev.png',
	},
	keywords: [
		'akmal muhammadjonov',
		'akmaljon muhammadjonov',
		'akmaldev',
		'dasturlash maqolalari',
		'portfolio javascript',
		'reactjs proectlar',
		'nextjs proectlar',
		'dasturlash tillari',
		"o'zbek tilida maqolalar",
		'dasturlashni o‘rganish',
		'IT yangiliklari',
	],
	openGraph: {
		title: 'Akmaljon Muhammadjonov - Portfolio, Blog & IT',
		description:
			'Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blog va portfolioda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.',
		type: 'website',
		url: 'https://akmaldev.uz',
		locale: 'en_EN',
		images:
			'https://www.setu.ie/Craft/assets/banners/_800x418_crop_center-center_82_none/informationtech.jpg?mtime=1711539742',
		countryName: 'Uzbekistan',
		siteName: 'Akmaljon | Frontend Developer',
		emails: 'info@akmaldev.uz',
	},
};

export default function RootLayout({ children }: ChildProps) {
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
					<SpeedInsights />
					<Toaster position='top-center' />
					{children}
				</ThemeProvider>
			</body>
			<GoogleAnalytics gaId='G-2BT7Y69RES' />
		</html>
	);
}

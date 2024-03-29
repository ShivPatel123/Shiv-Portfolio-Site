import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/header';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/themecontext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Shiv Patel | Portfolio',
	description:
		'Shivansh is a computer engineering student and aspiring engineer.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className="!scroll-smooth"
		>
			<body
				className={`${inter.className} bg-gray-50 text-gray-950 relative h-auto pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
			>
				{/* red and blue background blobs styled with tailwind classes */}
				<div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[7rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
				<div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[7rem] sm:w-[68.75rem] md:left-[-33rem] dark:bg-[#676394] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

				<ThemeContextProvider>
					<Header />
					{children}
					<Footer />
					<ThemeSwitch />
				</ThemeContextProvider>
			</body>
		</html>
	);
}

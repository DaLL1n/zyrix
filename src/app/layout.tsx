import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.scss';
import Header from '@/widgets/Header/Header';

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Zyrix',
  description: 'Zyrix',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

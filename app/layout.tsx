import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/app/styles/globals.scss';
import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';
import QueryProvider from './providers/QueryProvider';

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
        <QueryProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}

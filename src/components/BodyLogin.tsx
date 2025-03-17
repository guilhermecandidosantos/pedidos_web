import { Inter } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export function BodyLogin({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <body className={`${inter} antialiased`}>{children}</body>;
}

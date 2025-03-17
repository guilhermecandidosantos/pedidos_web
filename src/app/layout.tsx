'use server';

import './globals.css';

import type { Metadata } from 'next';

import { BodyAuthenticated } from '@/components/BodyAuthenticated';
import { BodyLogin } from '@/components/BodyLogin';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Vendas CBP',
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isBodyLogin = false;

  return (
    <html lang="en">
      {isBodyLogin ? (
        <BodyLogin>{children}</BodyLogin>
      ) : (
        <BodyAuthenticated>{children}</BodyAuthenticated>
      )}
    </html>
  );
}

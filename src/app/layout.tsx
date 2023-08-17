import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';
import type { Metadata } from 'next';
import { headerConfig } from '../config';
import { Layout } from '@/components/Layout';
import { MainNav } from '@/components/MainNav';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary text-gray-100">
        <Header>
          <MainNav items={headerConfig} />
        </Header>

        <Layout>
          <div className="py-20">{children}</div>
        </Layout>

        <Footer items={headerConfig}/>
      </body>
    </html>
  );
}

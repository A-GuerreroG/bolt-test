import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster"
import { TopNavBar } from "@/components/TopNavBar"
import { Providers } from "@/components/Providers"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KohLeo - Collaborative Trip Planning',
  description: 'Plan trips and share experiences in real-time with friends',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <TopNavBar />
          <main>{children}</main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
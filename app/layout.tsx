import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import I18nProvider from '@/components/providers/I18nProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CRISCA - Centro de Reciclaje Informático San Carlo Acutis',
  description: 'Convertimos equipos en desuso en puentes de oportunidad, memoria y comunidad.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={cn(inter.variable, poppins.variable, 'antialiased')}>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}

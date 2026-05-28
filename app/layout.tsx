import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EHP AI Studio Applet',
  description: 'AI-powered studio application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
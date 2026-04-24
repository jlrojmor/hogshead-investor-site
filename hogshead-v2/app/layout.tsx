import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hogshead Tequila — Premium Tequila Platform',
  description: 'Structured tequila barrel access, aging programs, brand creation, and single-barrel releases.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="noise">{children}</body>
    </html>
  );
}

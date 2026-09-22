import type { Metadata } from 'next';
import './globals.css';
import './evidence-stories.css';

export const metadata: Metadata = {
  title: '유다현 PM 포트폴리오',
  description: '유다현 Product Manager 포트폴리오',
  icons: {
    icon: '/assets/hyundai-elevator-favicon.svg',
    shortcut: '/assets/hyundai-elevator-favicon.svg',
    apple: '/assets/hyundai-elevator-favicon.svg',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}

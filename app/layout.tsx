import type { Metadata } from 'next';
import './globals.css';
import './evidence-stories.css';

export const metadata: Metadata = {
  title: '유다현 | 디지털기획서비스',
  description: '유다현 Product Manager 포트폴리오',
  icons: {
    icon: '/assets/hyundai-elevator-favicon.png',
    shortcut: '/assets/hyundai-elevator-favicon.png',
    apple: '/assets/hyundai-elevator-favicon.png',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}

import type { Metadata } from 'next';
import './globals.css';
import './evidence-stories.css';

export const metadata: Metadata = {
  title: '유다현 | 현대엘리베이터 디지털 서비스 PM 포트폴리오',
  description: '고객의 이동 경험과 서비스 흐름을 끝까지 설계하고 확인하는 유다현의 포트폴리오',
  openGraph: { title: '유다현 | 현대엘리베이터 디지털 서비스 PM 포트폴리오', description: '고객의 이동 경험을 끝까지 설계하는 PM', images: ['/assets/social-share.png'] },
  twitter: { card: 'summary_large_image', images: ['/assets/social-share.png'] },
  icons: {
    icon: '/assets/hyundai-elevator-favicon.png',
    shortcut: '/assets/hyundai-elevator-favicon.png',
    apple: '/assets/hyundai-elevator-favicon.png',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}

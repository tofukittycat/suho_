import type { Metadata } from "next";
import localFont from "next/font/local";

import AppLayout from "@/components/AppLayout";
import { cn } from "@/lib/utils";
import ExternalLinkHandler from "@/providers/ExternalLinkHandler";

import AppRegister from "../AppRegister";
import "./globals.css";

/** Pretendard 폰트 적용 */
const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.onsuho.com/"),
  title: "ONSUHO",
  description: "부족한 기운을 채워 수호해주는 행운 부적 서비스",
  keywords: ["온수호", "onsuho", "부적", "사주", "오늘의 운세", "행운"],
  icons: {
    icon: "/onsuho_favicon.ico",
  },
  openGraph: {
    title: "ONSUHO",
    description: "부족한 기운을 채워 수호해주는 행운 부적 서비스",
    images: [{ url: "/og_image.png", width: 800, height: 400 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    images: [
      {
        url: "/og_image.png",
        width: 800,
        height: 400,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} font-pretendard font-semibold`}>
      <head></head>
      <body
        className={cn(
          pretendard.className,
          "h-dvh w-full bg-gradient-to-b from-[#030329] to-[#9E83FF] bg-cover bg-no-repeat",
        )}
      >
        <AppRegister>
          <ExternalLinkHandler />
          <AppLayout>{children}</AppLayout>
        </AppRegister>
      </body>
    </html>
  );
}

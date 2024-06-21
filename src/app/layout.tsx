import type { Metadata } from "next";
import localFont from "next/font/local";

import AppLayout from "@/components/AppLayout";
import { cn } from "@/lib/utils";

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
  title: "ONSUHO",
  description: "부족한 기운을 채워 수호해주는 행운 부적 서비스",
  icons: {
    icon: "/onsuho_favicon.ico",
  },
  openGraph: {
    title: "ONSUHO",
    description: "부족한 기운을 채워 수호해주는 행운 부적 서비스",
    images: {
      url: "/og_image.png",
    },
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} font-pretendard font-semibold`}>
      <body
        className={cn(
          pretendard.className,
          "h-dvh w-full bg-gradient-to-b from-[#030329] to-[#9E83FF] bg-cover bg-no-repeat",
        )}
      >
        <AppRegister>
          <AppLayout>{children}</AppLayout>
        </AppRegister>
      </body>
    </html>
  );
}

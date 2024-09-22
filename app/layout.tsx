import type { Metadata } from "next";
import "../styles/global.scss";
import "../styles/reset.scss";
import { Inter_Tight } from 'next/font/google'
import HeaderScreen from "@/components/Header/Header.module";

export const metadata: Metadata = {
  title: "Projeto técnico",
  description: "lorem impsun",
};

const mainFontFamily  = Inter_Tight({
  weight: ['300', '400', '700'],
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
     
      <body className={mainFontFamily.className}>
        <HeaderScreen />
        <main>{children}</main>
      </body>
    </html>
  );
}

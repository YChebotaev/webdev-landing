import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto300 = Roboto({ subsets: ["cyrillic"], weight: "300" });

export const metadata: Metadata = {
  title: "Разработка сайтов",
  description: "Разработка сайтов",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={roboto300.className}>{children}</body>
    </html>
  );
}

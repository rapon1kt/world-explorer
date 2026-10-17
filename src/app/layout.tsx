import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ["400", "500", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "World Explorer",
  description: "Search for countries and their informations!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <body className="bg-slate-800 flex justify-center">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, Header } from "@/components";

import "../styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The CINE",
  description: "TheCine web site for movie searching.",
  icons: "./favicon.ico"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

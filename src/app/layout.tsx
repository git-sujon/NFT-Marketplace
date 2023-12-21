import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const inter = Roboto({ subsets: ["latin"], weight: ["300", "400", "700","900"] });

export const metadata: Metadata = {
  title: "NETERS | Home",
  description: "NFT Marketplace (Community)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}

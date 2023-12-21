import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

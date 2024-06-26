import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/ui/Container";
import Footer from "@/components/navbar/Footer";
import Divider from "@/components/ui/Divider";
import Providers from "@/components/providers/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trace Back",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <Container>{children}</Container>
          <Divider className="my-4" />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

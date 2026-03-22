import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import PageLoader from "@/components/PageLoader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "No Norms Media",
  description: "We Don't Follow Norms. We Build Them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground relative">
        <PageLoader />
        <CustomCursor />
        <Navbar />
        <main className="flex-grow flex flex-col pt-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

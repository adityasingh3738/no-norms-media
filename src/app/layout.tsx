import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import PageLoader from "@/components/PageLoader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "No Norms Media",
  description: "We Don't Follow Norms. We Build Them.",
  icons: {
    icon: "/Logo.png",
    apple: "/Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${syne.variable} antialiased`}
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

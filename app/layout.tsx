import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/Header";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/sections/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Omar | Personal Portfolio",
  description:
    "Omar is a Frontend Developer using React/Next.js to make beautiful and fast web pages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-9 transition-colors`}
      >
        <div className="bg-[#fbe2e3] absolute right-[11rem] top-[-6rem] w-[31.25rem] h-[31.25rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute left-[-35rem] top-[-1rem] w-[50rem] h-[31.25rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Toaster position="top-right" />
          <Footer />
        </ActiveSectionContextProvider>

        <ThemeSwitch />
      </body>
    </html>
  );
}

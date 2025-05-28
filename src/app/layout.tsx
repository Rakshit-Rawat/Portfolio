import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/navbar/footer";
import { ViewTransitions } from "next-view-transitions";
import { Toaster } from "sonner";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Hey , I'm Rakshit Rawat - Full Stack Developer | MERN Stack Specialist",
  description:
    "I'm a full stack developer focused on building sleek, performant web apps with MongoDB, Express, React, and Node.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${inter.className} bg-neutral-200 antialiased dark:bg-neutral-700`}
        >
          <Toaster position="top-center" richColors />
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}

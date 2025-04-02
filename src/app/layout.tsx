import type { Metadata } from "next";
import "./globals.css";

import NavBar from "./homeComponents/navbar/navBar";
import Footer from "./homeComponents/footer";

import { Roboto, Montserrat } from "next/font/google";
import { Suspense } from "react";
import Loading from "./loading";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Century Educational Academy",
    template: "%s - Century Academy",
  },
  description: "We Have a warm wellcome to you in Century Educational Academy.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#F1FAEE] ${roboto.className}`}>
        <Suspense fallback={<Loading />}>
          <NavBar />
        </Suspense>
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
        <div className="h-[5vh] flex justify-center items-center bg-[#F1FAEE] max700:hidden">
          <span className="font-bold mr-[0.4rem]">
            Century Education Academy
          </span>
          c All rights reserved | Designed and Developed by Shikhar Chand
          ThaQuri.
        </div>
      </body>
    </html>
  );
}

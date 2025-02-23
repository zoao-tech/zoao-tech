import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
});

const modista = localFont({
  src: "../fonts/Modista.woff2",
  variable: "--font-modista",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${modista.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <Analytics />
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

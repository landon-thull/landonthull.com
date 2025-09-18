import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Landon Thull | Software Engineer",
  description: "Software Engineer based in texas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <a rel="me" href="https://mastodon.social/@landonthull">
          Mastodon
        </a>
      </head>
      <body className={`bg-neutral-950 ${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

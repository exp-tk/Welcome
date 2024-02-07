import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { Header } from "./components/Header";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: ".dev",
  description: "A serial experimental project.",
};

const interTight = Inter_Tight({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="light text-foreground bg-background">
      <body className="min-h-screen">
        <Providers>
          <main className={interTight.className}>
            <Header />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}

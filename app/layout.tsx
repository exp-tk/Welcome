import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Dev Portal",
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
    <html lang="ja" className="text-foreground bg-background">
      <body className="min-h-screen w-screen overflow-x-hidden">
        <Providers>
          <main className={interTight.className}>
            <Header />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Öğrenci Koçluğu - Uzman Eğitim Hizmetleri | Psk. Mustafa Dinç",
  description: "Uzman eğitmenler ekibimizden kişiselleştirilmiş koçlukla akademik yolculuğunuzu dönüştürün. YKS, TYT, AYT hazırlığı, matematik, fen bilimleri ve çalışma teknikleri konularında uzmanlaşmış.",
  keywords: "öğrenci koçluğu, akademik koçluk, YKS hazırlık, TYT hazırlık, AYT hazırlık, matematik özel ders, fen bilimleri, çalışma teknikleri, üniversite hazırlık",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

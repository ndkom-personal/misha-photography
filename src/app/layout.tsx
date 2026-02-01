import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Misha Photography | Professional Portraits in San Francisco",
  description: "Award-winning portrait and family photography in San Francisco. 5+ years experience capturing authentic moments. Book your session today - 50% below market rates.",
  keywords: "San Francisco photographer, portrait photography, family photos, corporate headshots, professional photography SF",
  openGraph: {
    title: "Misha Photography | San Francisco Portrait Photographer",
    description: "Professional portrait and family photography at unbeatable prices. Book your session today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

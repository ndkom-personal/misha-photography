import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
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
  title: {
    default: "Misha Photography | Professional Portraits in San Francisco",
    template: "%s | Misha Photography",
  },
  description: "Professional portrait and family photography in San Francisco. 5+ years experience capturing authentic moments at iconic Bay Area locations. Book your session today.",
  keywords: [
    "San Francisco photographer",
    "portrait photography SF",
    "family photographer San Francisco",
    "corporate headshots Bay Area",
    "LinkedIn headshots San Francisco",
    "professional photography SF",
    "business photography San Francisco",
    "Golden Gate photos",
    "Bay Area family portraits",
  ],
  authors: [{ name: "Misha Photography" }],
  creator: "Misha Photography",
  openGraph: {
    title: "Misha Photography | San Francisco Portrait Photographer",
    description: "Professional portrait and family photography in San Francisco. Book your session today.",
    type: "website",
    locale: "en_US",
    siteName: "Misha Photography",
  },
  twitter: {
    card: "summary_large_image",
    title: "Misha Photography | San Francisco Portrait Photographer",
    description: "Professional portrait and family photography in San Francisco.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: "your-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </head>
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

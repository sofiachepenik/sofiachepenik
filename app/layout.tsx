import type { Metadata } from "next";
import { Nunito_Sans, Dancing_Script } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sofia Chepenik - Coach, Collaborator & Creator",
    template: "%s | Sofia Chepenik"
  },
  description: "Transform your mindset, unlock your potential, and create lasting change with Sofia Chepenik. Professional coaching, speaking engagements, and authentic leadership.",
  keywords: ["Sofia Chepenik", "life coach", "mindset coach", "lacrosse", "speaking", "empowerment", "leadership", "transformation"],
  authors: [{ name: "Sofia Chepenik" }],
  creator: "Sofia Chepenik",
  publisher: "Sofia Chepenik",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sofiachepenik.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sofiachepenik.com',
    title: 'Sofia Chepenik - Coach, Collaborator & Creator',
    description: 'Transform your mindset, unlock your potential, and create lasting change with Sofia Chepenik.',
    siteName: 'Sofia Chepenik',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sofia Chepenik - Coach, Collaborator & Creator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sofia Chepenik - Coach, Collaborator & Creator',
    description: 'Transform your mindset, unlock your potential, and create lasting change with Sofia Chepenik.',
    images: ['/og-image.jpg'],
    creator: '@sofiachepenik',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${nunitoSans.variable} ${dancingScript.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

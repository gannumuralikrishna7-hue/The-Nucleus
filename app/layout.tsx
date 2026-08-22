import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thenucleuscrm.com"),
  title: "The Nucleus: CRM That Thinks, Talks, and Closes",
  description:
    "The Nucleus brings your Gmail, WhatsApp, calls, Google Workspace, and AI intelligence into one unified workspace, so your team always knows the right move, at the right time.",
  keywords: [
    "CRM",
    "sales CRM",
    "AI CRM",
    "WhatsApp CRM",
    "Google Workspace CRM",
    "sales automation",
    "lead tracking",
    "The Nucleus",
  ],
  authors: [{ name: "The Nucleus" }],
  creator: "The Nucleus",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thenucleuscrm.com",
    title: "The Nucleus: CRM That Thinks, Talks, and Closes",
    description:
      "The Nucleus brings your Gmail, WhatsApp, calls, Google Workspace, and AI intelligence into one unified workspace.",
    siteName: "The Nucleus",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Nucleus CRM Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Nucleus: CRM That Thinks, Talks, and Closes",
    description:
      "The Nucleus brings your Gmail, WhatsApp, calls, Google Workspace, and AI intelligence into one unified workspace.",
    images: ["/og-image.png"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "The Nucleus",
              applicationCategory: "BusinessApplication",
              description:
                "AI-powered CRM platform that unifies Gmail, WhatsApp, calls, and Google Workspace.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body className="bg-[#0A0A0F] text-white antialiased overflow-x-hidden">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#5C6BFF] focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

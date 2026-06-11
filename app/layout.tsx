import type { Metadata } from "next";
import { Playfair_Display, Jost, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["italic", "normal"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bake-affairs-by-ayesha.vercel.app"),
  title: "Bake Affairs by Ayesha | Home Bakery in Lahore",
  description:
    "Custom cakes, brownies & cookies — lovingly made to order in Lahore. A boutique home bakery by Ayesha.",
  keywords: [
    "home bakery Lahore",
    "custom cakes Lahore",
    "brownies",
    "cookies",
    "Bake Affairs by Ayesha",
  ],
  openGraph: {
    title: "Bake Affairs by Ayesha | Home Bakery in Lahore",
    description:
      "Custom cakes, brownies & cookies — lovingly made to order in Lahore.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jost.variable} ${cormorant.variable} scroll-smooth`}
    >
      <body className="bg-background text-espresso font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

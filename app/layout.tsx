import type { Metadata } from "next";
import { Unbounded, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Geoffrey Kwadzo Alomatu | Digital Communication Strategist",
  description:
    "Premium portfolio showcasing digital communication strategy, PR leadership, and media initiatives.",
  keywords: [
    "Digital Communication",
    "Public Relations",
    "Social Media Strategy",
    "Content Strategy",
    "Media",
  ],
  openGraph: {
    title: "Geoffrey Kwadzo Alomatu | Digital Communication Strategist",
    description:
      "Premium portfolio showcasing digital communication strategy, PR leadership, and media initiatives.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${unbounded.variable} ${plusJakarta.variable} bg-[color:var(--bg)] text-[color:var(--text)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

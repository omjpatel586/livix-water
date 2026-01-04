import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Livix Water LLP - Pure Mineral Water",
  description:
    "Official website of Livix Water LLP, a leading mineral water brand in Surat near Kamrej, Jokha village.",
  icons: {
    // Standard favicon for browsers
    icon: "/assets/logo.svg",

    // Shortcut icon (used in some browsers as an alternative)
    shortcut: "/assets/logo.svg",

    // Apple touch icon (iOS home screen)
    apple: "/assets/logo.svg",

    // Optional: mask icon for Safari pinned tabs (SVG)
    mask: "/assets/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        cz-shortcut-listen="false"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

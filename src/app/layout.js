import { SpeedInsights } from "@vercel/speed-insights/next"
import { Poppins, Geist, Geist_Mono } from "next/font/google";
import "./assets/css/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600"], 
  variable: "--font-poppins", 
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio - Mônica Santos",
  description: "Confira meu portfólio e veja como posso contribuir para seu projeto.",
  charset: "UTF-8",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Capstone Skeleton",
  description: "Frontend AI Engineering Capstone Skeleton",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen text-slate-900">
        <div
          className="min-h-screen"
          style={{
            background: "linear-gradient(135deg, #bfdbfe 0%, #7dd3fc 50%, #60a5fa 100%)",
          }}
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 py-8">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

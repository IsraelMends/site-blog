import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className="min-h-full min-w-full bg-slate-500"
    >
     <h2 className="text-4xl text-green-400">Welcome to My Blog</h2>
    </div>
  );
}

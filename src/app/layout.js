import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const mont = Montserrat({ subsets: ["latin"] })
export const metadata = {
  title: "BLOGVERSE",
  description: "Multiverse of blogs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mont.className}><Navbar />{children}<Footer /></body>
    </html>
  );
}
